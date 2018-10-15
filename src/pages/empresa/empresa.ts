import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import { DomSanitizer } from '@angular/platform-browser';
import { IListaEmpresas } from '../../interfaces/IListaEmpresas';
import { EmpresasProvider } from '../../providers/empresas/empresas';
import { LoadingController } from 'ionic-angular';

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

  itens:IListaEmpresas;

  abrirPagMapa(itens){
    this.navCtrl.push(MapaPage,{dados:itens});
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public domSanitizer: DomSanitizer, public loadingCtrl: LoadingController) {
    this.itens = this.navParams.get('dados');
  }

  carregar() {
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 4000
    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaPage');
  }

}
