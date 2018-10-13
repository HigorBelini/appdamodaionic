import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresaPage } from '../empresa/empresa';

import { IListaEmpresas } from '../../interfaces/IListaEmpresas';
import { EmpresasProvider } from '../../providers/empresas/empresas';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
  lista: IListaEmpresas[];

    abrirPagEmpresa(itens){
      this.navCtrl.push(EmpresaPage,{dados:itens});
    }

  constructor(public navCtrl: NavController, public navParams: NavParams, public empresaProvider: EmpresasProvider) {
   //this.lista = this.empresaProvider.all();
   
  }

  ionViewDidEnter(){
    this.empresaProvider.listaEmpresas().subscribe(res =>{
      this.lista = res;
    }, erro => {
      console.log("erro" + erro.message)
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

}
