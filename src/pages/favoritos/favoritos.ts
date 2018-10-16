import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  public loader;
  carregar() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando favoritos...",
    });
    this.loader.present();
  }

  fechacarregar(){
    this.loader.dismiss();
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.carregar();
    console.log('ionViewDidLoad FavoritosPage');
    this.fechacarregar();
  }

}
