import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import { DomSanitizer } from '@angular/platform-browser';
import { EmpresasProvider } from '../../providers/empresas/empresas';
import { LoadingController } from 'ionic-angular';
import { IFavoritos } from '../../interfaces/IFavoritos';
import { IUsuario } from '../../interfaces/IUsuario';
import { UserProvider } from '../../providers/user/user';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';
import { AlertController } from 'ionic-angular';
import { ListaPage } from '../lista/lista';
import { LoginPage } from '../login/login';
import { NovouserPage } from '../novouser/novouser';

/**
 * Generated class for the FavoritodetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritodetalhe',
  templateUrl: 'favoritodetalhe.html',
})
export class FavoritodetalhePage {
  itens: IFavoritos;
  user: IUsuario;

  public loader;
  abrirPagMapa(itens) {
    this.navCtrl.push(MapaPage, { dados: itens });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public domSanitizer: DomSanitizer, public loadingCtrl: LoadingController, public userProvider: UserProvider, public favoritoProvider: FavoritosProvider, public empresaProvider: EmpresasProvider, public alertCtrl: AlertController) {
    this.itens = this.navParams.get('dados');
  }

  ionViewDidEnter() {
    this.userProvider.getStorage("user").then(user => {
      this.carregar();
      if (user) {
      this.user = user;
      console.log('ionViewDidEnter FavoritodetalhePage');
      } else {
      this.cancelar();
      this.showConfirm();
      }
      this.fechacarregar();
    }).catch((error) => {
      console.log('Erro ', error);
    });
  }

  abrirLista(){
    this.carregar();
    this.navCtrl.push(ListaPage);
    this.fechacarregar();
  }

  abreMapa(){
    this.navCtrl.push(MapaPage);
  }

  /*openwebpage(itens){

    const options: InAppBrowserOptions = {
      zoom: 'yes'
    }

    const browser = this.inAppBrowser.create(itens, '_self', options);

  }*/

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
      message: 'Com o login, você visualiza todos os detalhes, e ainda consegue adicionar o site em seus favoritos. Caso não tenha uma conta clique em "Não tenho uma conta" e crie uma agora mesmo.',
      buttons: [
        {
          text: 'Fazer Login',
          handler: () => {
            this.navCtrl.setRoot(LoginPage);
          }
        },
        {
          text: 'Não tenho Uma Conta',
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



}
