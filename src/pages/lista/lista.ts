import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresaPage } from '../empresa/empresa';

import { IListaEmpresas } from '../../interfaces/IListaEmpresas';
import { EmpresasProvider } from '../../providers/empresas/empresas';
import { LoadingController } from 'ionic-angular';

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
  public loader;
    abrirPagEmpresa(itens){
      this.navCtrl.push(EmpresaPage,{dados:itens});
    }

    carregar(){
      this.loader = this.loadingCtrl.create({
        content: "Carregando empresas...",
      }); 
      this.loader.present();
    }

    fechacarregar(){
      this.loader.dismiss();
    }

  constructor(public navCtrl: NavController, public navParams: NavParams, public empresaProvider: EmpresasProvider, public loadingCtrl: LoadingController) {
   //this.lista = this.empresaProvider.all();
   
  }

  ionViewDidEnter(){
    this.carregar();
    this.empresaProvider.listaEmpresas().subscribe(res =>{
      this.lista = res;
    }, erro => {
      console.log("erro" + erro.message)
    });
    console.log('ionViewDidEnter ListaPage');
    this.fechacarregar();
  }

}
