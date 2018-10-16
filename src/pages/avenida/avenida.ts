import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the AvenidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avenida',
  templateUrl: 'avenida.html',
})
export class AvenidaPage {
  public loader;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }
  carregar(){
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
    }); 
    this.loader.present();
  }

  fechacarregar(){
    this.loader.dismiss();
  }

  ionViewDidEnter() {
    this.carregar();
    console.log('ionViewDidLoad AvenidaPage');
    this.fechacarregar();
  }

}
