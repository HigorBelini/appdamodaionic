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

  abrirPagPromoDetalhes(itens){
    this.navCtrl.push(PromodetalhesPage,{dados:itens});
  }

  carregar() {
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 1250
    });
    loader.present();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public promocaoProvider: PromocoesProvider, public loadingCtrl: LoadingController) {
    //this.lista = this.promocaoProvider.all();
  }

  ionViewDidEnter(){
    this.promocaoProvider.all().subscribe(res =>{
      this.lista = res;
    }, erro => {
      console.log("erro" + erro.message)
   });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PromocoesPage');
  }

}
