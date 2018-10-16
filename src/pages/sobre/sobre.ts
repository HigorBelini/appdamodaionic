import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {
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
    console.log('ionViewDidLoad SobrePage');
    this.fechacarregar();
  }

}
