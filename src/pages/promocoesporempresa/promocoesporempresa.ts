import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-promocoesporempresa',
  templateUrl: 'promocoesporempresa.html',
})
export class PromocoesporempresaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromocoesporempresaPage');
  }

}
