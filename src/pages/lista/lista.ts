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
  public refresher;
  public isRefreshing: boolean = false;
  
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

    recarregar(refresher) {
      this.refresher = refresher;
      this.isRefreshing = true;
      this.carregarLista();
    }

  constructor(public navCtrl: NavController, public navParams: NavParams, public empresaProvider: EmpresasProvider, public loadingCtrl: LoadingController) {
   //this.lista = this.empresaProvider.all();
   
  }

  ionViewDidEnter(){
    this.carregarLista();
  }

carregarLista(){
  this.carregar();
    this.empresaProvider.listaEmpresas().subscribe(res =>{
      this.lista = res;
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
    }, erro => {
      console.log("erro" + erro.message)
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
    });
    console.log('ionViewDidEnter ListaPage');
    this.fechacarregar();
    /*if(this.isRefreshing){
      this.refresher.complete();
      this.isRefreshing = false;
    }*/
  }
  
  
}