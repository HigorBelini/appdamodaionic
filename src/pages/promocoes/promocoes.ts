import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IListaPromocoes } from '../../interfaces/IListaPromocoes';
import { PromocoesProvider } from '../../providers/promocoes/promocoes';
import { PromodetalhesPage } from '../promodetalhes/promodetalhes';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public promocaoProvider: PromocoesProvider) {
    //this.lista = this.promocaoProvider.all();
  }

  ionViewDidEnter(){
    this.promocaoProvider.all().subscribe(res =>{
      this.lista = res;
    }, erro => {
      console.log("erro" + erro.message)
   });

   let data:IListaPromocoes = {
    "id": 1,
    "company_id": 2,
    "name": "Sapatos, Sandálias e Moda Praia",
    "startdate": "2018-12-05",
    "finaldate": "2018-12-20",
    "descriptive": "Atenção! Neste final de ano estamos liquidando nosso estoque para renovação. Venha aproveitar. Temos produtos com até 50% de desconto",
    "user_id": 1,
    "promotionimage": "http://s3.amazonaws.com/mapa-da-obra-producao/wp-content/uploads/2018/01/queima-de-estoque.jpg"
  }
    /*
    this.promocaoProvider.add(data).subscribe(res =>{
      console.log(res);
    }, erro => {
      console.log("erro" + erro.message)
    });

    this.promocaoProvider.edit(data).subscribe(res =>{
      console.log(res);
    }, erro => {
      console.log("erro" + erro.message)
    });
    
    this.promocaoProvider.delete(data).subscribe(res =>{
      console.log(res);
    }, erro => {
      console.log("erro" + erro.message)
    });

    this.promocaoProvider.show(data).subscribe(res =>{
      console.log(res);
    }, erro => {
      console.log("erro" + erro.message)
    });*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromocoesPage');
  }

}
