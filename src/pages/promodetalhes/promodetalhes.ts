import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IListaPromocoes } from '../../interfaces/IListaPromocoes';
import { PromocoesProvider } from '../../providers/promocoes/promocoes';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the PromodetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promodetalhes',
  templateUrl: 'promodetalhes.html',
})
export class PromodetalhesPage {

  itens:IListaPromocoes;

  constructor(public navCtrl: NavController, public navParams: NavParams, public domSanitizer: DomSanitizer) {
    this.itens = this.navParams.get('dados');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromodetalhesPage');
  }

}
