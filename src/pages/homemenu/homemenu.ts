import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvenidaPage } from '../avenida/avenida';
import { ComochegarPage } from '../comochegar/comochegar';
import { ListaPage } from '../lista/lista';
import { PromocoesPage } from '../promocoes/promocoes';

/**
 * Generated class for the HomemenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homemenu',
  templateUrl: 'homemenu.html',
})
export class HomemenuPage {

  abrirAvenidaBot(){
    this.navCtrl.push(AvenidaPage);
  }

  abrirComoChegarBot(){
    this.navCtrl.push(ComochegarPage);
  }

  abrirListaBot(){
    this.navCtrl.push(ListaPage);
  }

  abrirPromocoesBot(){
    this.navCtrl.push(PromocoesPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomemenuPage');
  }

}
