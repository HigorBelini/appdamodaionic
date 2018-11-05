import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AvenidaPage } from '../avenida/avenida';
import { ComochegarPage } from '../comochegar/comochegar';
import { ListaPage } from '../lista/lista';
import { PromocoesPage } from '../promocoes/promocoes';
import { LoadingController } from 'ionic-angular';
import { PromodaPage } from '../promoda/promoda';
import { FavoritosPage } from '../favoritos/favoritos';
import { IListaPromocoes } from '../../interfaces/IListaPromocoes';
import { IUsuario } from '../../interfaces/IUsuario';
import { PromodetalhesPage } from '../promodetalhes/promodetalhes';
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';
import { NovouserPage } from '../novouser/novouser';
import { HomeProvider } from '../../providers/home/home';
import { PromocoesProvider } from '../../providers/promocoes/promocoes';
import { UserpromotionProvider } from '../../providers/userpromotion/userpromotion';
import { DetfuncpromocaoPage } from '../detfuncpromocao/detfuncpromocao';

/**
 * Generated class for the HomemenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homemenu',
  templateUrl: 'homemenu.html',
})
export class HomemenuPage {
  
  lista: IListaPromocoes[];
  itens: IListaPromocoes;
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
            this.navCtrl.setRoot(HomemenuPage);
          }
        }
      ]
    });
    confirm.present();
  }

  cancelar() {
    this.navCtrl.setRoot(HomemenuPage);
  }

  carregar() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
    });
    this.loader.present();
  }

  fechacarregar(){
    this.loader.dismiss();
  }

  abrirAvenidaBot(){
    //this.carregar();
    this.navCtrl.push(AvenidaPage);
    //this.fechacarregar();
  }

  abrirDetFuncPromBot(){
    //this.carregar();
    this.navCtrl.push(DetfuncpromocaoPage);
    //this.fechacarregar();
  }

  abrirComoChegarBot(){
    this.carregar();
    this.navCtrl.push(ComochegarPage);
    this.fechacarregar();
  }

  abrirListaBot(){
    //this.carregar();
    this.navCtrl.push(ListaPage);
    //this.fechacarregar();
  }

  abrirPromocoesBot(){
    //this.carregar();
    this.navCtrl.push(PromocoesPage);
    //this.fechacarregar();
  }

  abrirPromodaBot(){
    //this.carregar();
    this.navCtrl.push(PromodaPage);
    //this.fechacarregar();
  }

  abrirMeusFavoritos(){
    //this.carregar();
    this.navCtrl.push(FavoritosPage);
    //this.fechacarregar();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public userProvider: UserProvider, public alertCtrl: AlertController, public homeProvider:HomeProvider, public promocaoProvider: PromocoesProvider, public userpromotionProvider: UserpromotionProvider) {
  }

  ionViewDidEnter() {
    //this.carregar();
    this.userProvider.getStorage("user").then(user => {
      if (user) {
        this.user = user;
      }
    });
    
    //console.log('ionViewDidLoad HomemenuPage');
    //this.fechacarregar();
  }

  ionViewDidLoad(){
    //this.carregar();
    this.carregarLista();
   // console.log('ionViewDidLoad HomemenuPage');
   // this.fechacarregar();
  }

  carregarLista(){
    this.carregar();
    this.homeProvider.banner().subscribe(res =>{
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
   this.fechacarregar();
  }

  showAlertSuccess(){
    const alert = this.alertCtrl.create({
      title: 'Cadastro na promoção realizado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertDenied(){
    const alert = this.alertCtrl.create({
      title: 'Você já está cadastrado nessa promoção. Por favor, cadastre-se em outra.',
      buttons: ['OK']
    });
    alert.present();
  }

  cadastroempromocao() {
    console.log('Cadastrado na promoção');
    this.userpromotionProvider.userspromotion(this.lista, this.user).subscribe(res => {
      if (res) {
        //console.log(res);
        this.showAlertSuccess();
      }
    }, erro => {
      console.log("Erro: " + erro.message);
        this.showAlertDenied();
    });
  }
}
