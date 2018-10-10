import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IListaEmpresas } from '../../interfaces/IListaEmpresas';

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  itens:IListaEmpresas;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itens = this.navParams.get('dados');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

}
