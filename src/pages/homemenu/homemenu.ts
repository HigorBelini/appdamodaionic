import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvenidaPage } from '../avenida/avenida';
import { ComochegarPage } from '../comochegar/comochegar';
import { ListaPage } from '../lista/lista';
import { PromocoesPage } from '../promocoes/promocoes';
import { LoadingController } from 'ionic-angular';

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
  public loader;
  carregar() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
    });
    this.loader.present();
  }

  fechacarregar(){
    this.loader.dismiss();
  }

  abrirAvenidaBot(){
    this.carregar();
    this.navCtrl.push(AvenidaPage);
    this.fechacarregar();
  }

  abrirComoChegarBot(){
    this.carregar();
    this.navCtrl.push(ComochegarPage);
    this.fechacarregar();
  }

  abrirListaBot(){
    this.carregar();
    this.navCtrl.push(ListaPage);
    this.fechacarregar();
  }

  abrirPromocoesBot(){
    this.carregar();
    this.navCtrl.push(PromocoesPage);
    this.fechacarregar();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.carregar();
    console.log('ionViewDidLoad HomemenuPage');
    this.fechacarregar();
  }

}
