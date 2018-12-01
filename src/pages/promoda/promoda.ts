import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ListaPage } from '../lista/lista';

@IonicPage()
@Component({
  selector: 'page-promoda',
  templateUrl: 'promoda.html',
})
export class PromodaPage {
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
    console.log('ionViewDidLoad PromodaPage');
    this.fechacarregar();
  }

  abrirLista() {
    this.navCtrl.push(ListaPage);
  }

}
