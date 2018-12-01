import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detfuncpromocao',
  templateUrl: 'detfuncpromocao.html',
})
export class DetfuncpromocaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetfuncpromocaoPage');
  }

}
