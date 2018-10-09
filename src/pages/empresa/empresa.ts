import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  itens = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itens = this.navParams.get('dados');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaPage');
  }

}
