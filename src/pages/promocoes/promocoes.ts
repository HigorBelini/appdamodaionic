import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IListaPromocoes } from '../../interfaces/IListaPromocoes';
import { PromocoesProvider } from '../../providers/promocoes/promocoes';
import { PromodetalhesPage } from '../promodetalhes/promodetalhes';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the PromocoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promocoes',
  templateUrl: 'promocoes.html',
})
export class PromocoesPage {

  lista: IListaPromocoes[];
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  abrirPagPromoDetalhes(itens){
    this.navCtrl.push(PromodetalhesPage,{dados:itens});
  }

  carregar(){
    this.loader = this.loadingCtrl.create({
      content: "Carregando promoções...",
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public promocaoProvider: PromocoesProvider, public loadingCtrl: LoadingController) {
    //this.lista = this.promocaoProvider.all();
  }

  ionViewDidEnter(){
    this.carregarLista();
  }

  carregarLista(){
    this.carregar();
    this.promocaoProvider.all().subscribe(res =>{
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
   console.log('ionViewDidEnter PromocoesPage');
   this.fechacarregar();
  }

}
