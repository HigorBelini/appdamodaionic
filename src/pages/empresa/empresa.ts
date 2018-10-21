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
  user: IUsuario;
  public loader;
  abrirPagMapa(itens) {
    this.navCtrl.push(MapaPage, { dados: itens });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public domSanitizer: DomSanitizer, public loadingCtrl: LoadingController, public userProvider: UserProvider, public favoritoProvider: FavoritosProvider, public empresaProvider: EmpresasProvider, public alertCtrl: AlertController) {
    this.itens = this.navParams.get('dados');
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

  ionViewDidLoad() {
    this.userProvider.getStorage("user").then(user => {
      if (user) {
        this.user = user;
      }
    });
  }

  ionViewDidEnter() {
    this.carregar();
    console.log('ionViewDidEnter EmpresaPage');

    this.fechacarregar();
  }

  showAlertSuccess(){
    const alert = this.alertCtrl.create({
      title: 'Adicionado a sua lista de favoritos!',
      buttons: ['OK']
    });
    alert.present();
  }

  favorito() {
    console.log('Favorito');
    this.carregar2();
    this.favoritoProvider.favorito(this.itens, this.user).subscribe(res => {
      if (res) {
        console.log(res);
        this.showAlertSuccess();
      }
    this.fechacarregar2();
    }, erro => {
      console.log("Erro: " + erro.message);
    });
  }

}
