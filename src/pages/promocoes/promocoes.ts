import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { IListaPromocoes } from '../../interfaces/IListaPromocoes';
import { PromocoesProvider } from '../../providers/promocoes/promocoes';
import { PromodetalhesPage } from '../promodetalhes/promodetalhes';
import { LoadingController } from 'ionic-angular';
import { UserProvider} from '../../providers/user/user';
import { LoginPage } from '../login/login';
import { NovouserPage } from '../novouser/novouser';
import { IUsuario } from '../../interfaces/IUsuario';

/**
 * Generated class for the PromocoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promocoes',
  templateUrl: 'promocoes.html',
})
export class PromocoesPage {

  lista: IListaPromocoes[];
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  user: IUsuario;

  abrirPagPromoDetalhes(itens){

    this.userProvider.getStorage("user").then(user => {
      this.carregar();
      if (user) {
      this.user = user;
      this.navCtrl.push(PromodetalhesPage,{dados:itens});
      } else {
      this.cancelar();
      this.showConfirm();
      }
      this.fechacarregar();
    }).catch((error) => {
      console.log('Erro ', error);
    });
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Faça login para visualizar todos os detalhes desta promoção',
      message: 'Com o login, você visualiza todos os detalhes, e ainda consegue adicionar o site em seus favoritos. Caso não tenha uma conta clique em "Criar uma conta" e crie uma agora mesmo.',
      buttons: [
        {
          text: 'Fazer Login',
          handler: () => {
            this.navCtrl.setRoot(LoginPage);
          }
        },
        {
          text: 'Criar uma conta',
          handler: () => {
            this.navCtrl.setRoot(NovouserPage);
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            this.navCtrl.setRoot(PromocoesPage);
          }
        }
      ]
    });
    confirm.present();
  }

  cancelar() {
    this.navCtrl.setRoot(PromocoesPage);
  }
  
  carregar(){
    this.loader = this.loadingCtrl.create({
      content: "Carregando promoções...",
    }); 
    this.loader.present();
  }

  fechacarregar(){
    this.loader.dismiss();
  }

  recarregar(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarLista();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider:UserProvider, public promocaoProvider: PromocoesProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    //this.lista = this.promocaoProvider.all();
  }

  ionViewDidEnter(){
    this.carregarLista();
  }

  carregarLista(){
    this.carregar();
    this.promocaoProvider.all().subscribe(res =>{
      this.lista = res;
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
    }, erro => {
      console.log("erro" + erro.message)
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
   });
   console.log('ionViewDidEnter PromocoesPage');
   this.fechacarregar();
  }

}
