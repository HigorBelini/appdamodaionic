import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfiluserPage } from '../perfiluser/perfiluser';
import { PromocoescadastradasPage } from '../promocoescadastradas/promocoescadastradas';
import { FavoritosPage } from '../favoritos/favoritos';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the UpdateuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updateuser',
  templateUrl: 'updateuser.html',
})
export class UpdateuserPage {
  public loader;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
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

  perfilPage() {
    this.navCtrl.push(PerfiluserPage);
  }

  promotionsPage() {
    this.navCtrl.push(PromocoescadastradasPage);
  }

  abrirMeusFavoritos(){
    this.navCtrl.push(FavoritosPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateuserPage');
  }

}
