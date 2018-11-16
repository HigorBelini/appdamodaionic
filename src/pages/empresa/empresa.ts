import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import { DomSanitizer } from '@angular/platform-browser';
import { IListaEmpresas } from '../../interfaces/IListaEmpresas';
import { EmpresasProvider } from '../../providers/empresas/empresas';
import { LoadingController } from 'ionic-angular';
//import { IFavoritos } from '../../interfaces/IFavoritos';
import { IUsuario } from '../../interfaces/IUsuario';
import { UserProvider } from '../../providers/user/user';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';
import { AlertController } from 'ionic-angular';
import { ListaPage } from '../lista/lista';
import { LoginPage } from '../login/login';
import { NovouserPage } from '../novouser/novouser';
import { PromocoesporempresaPage } from '../promocoesporempresa/promocoesporempresa';
import { IListaPromocoes } from '../../interfaces/IListaPromocoes';
import { PromocoesProvider } from '../../providers/promocoes/promocoes';


/**
 * Generated class for the EmpresaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empresa',
  templateUrl: 'empresa.html',
})
export class EmpresaPage {

  itens: IListaEmpresas;
  item: IListaPromocoes;
  user: IUsuario;
  public loader;
  abrirPagMapa(itens) {
    this.navCtrl.push(MapaPage, { dados: itens });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public domSanitizer: DomSanitizer, public promocoesProvider: PromocoesProvider, public loadingCtrl: LoadingController, public userProvider: UserProvider, public favoritoProvider: FavoritosProvider, public empresaProvider: EmpresasProvider, public alertCtrl: AlertController) {
    this.itens = this.navParams.get('dados');
  }

  abreMapa(){
    this.navCtrl.push(MapaPage);
  }

  carregar() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando empresa...",
    });
    this.loader.present();
  }

  fechacarregar() {
    this.loader.dismiss();
  }

  carregar2() {
    this.loader = this.loadingCtrl.create({
      content: "Processando...",
    });
    this.loader.present();
  }

  fechacarregar2() {
    this.loader.dismiss();
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Faça login para visualizar todos os detalhes desta empresa',
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
            this.navCtrl.setRoot(ListaPage);
          }
        }
      ]
    });
    confirm.present();
  }

  cancelar() {
    this.navCtrl.setRoot(ListaPage);
  }

  ionViewDidEnter() {
    this.userProvider.getStorage("user").then(user => {
      if (user) {
        this.user = user;
      }
    }).catch((error) => {
      console.log('Erro ', error);
    });
  }

  showAlertSuccess(){
    const alert = this.alertCtrl.create({
      title: 'Adicionado a sua lista de favoritos!',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertDenied(){
    const alert = this.alertCtrl.create({
      title: 'Ocorreu um erro inesperado. Certifique-se que você está logado no aplicativo',
      buttons: ['OK']
    });
    alert.present();
  }

  favorito() {
    console.log('Favorito');
    this.carregar2();
    this.favoritoProvider.favorito(this.itens, this.user).subscribe(res => {
      if (res) {
        //console.log(res);
        this.showAlertSuccess();
      }
    this.fechacarregar2();
    }, erro => {
      this.showAlertDenied();
      console.log("Erro: " + erro.message);
      this.fechacarregar2();
    });
  }

  promocoes(){
    this.navCtrl.setRoot(PromocoesporempresaPage);
    //this.cadastroempromocao();
  }


  /*cadastroempromocao() {
    console.log('Cadastrado na promoção');
    this.promocoesProvider.promotionscompany(this.item).subscribe(res => {
      if (res) {
        this.showAlertSuccess();
      }
    }, erro => {
      console.log("Erro: " + erro.message);
    });
  }*/
}
