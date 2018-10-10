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
    this.empresaProvider.all().subscribe(res =>{
      this.lista = res;
    }, erro => {
      console.log("erro" + erro.message)
    });

    let data:IListaEmpresas = {
    "id":1,
    "socialname":"Preto e Branco Calçados",
    "fantasyname":"Preto e Branco Calçados",
    "number":8000,
    "logo":"https://scontent.ffrc5-1.fna.fbcdn.net/v/t1.0-9/21032575_1132807973487185_2904497181765316242_n.png?_nc_cat=101&oh=9297f6b7dc6fdb74978ac5b30a934046&oe=5C5BDFA2", 
    "shopfacade":"", 
    "latitude":100, 
    "longitude":200, 
    "industry":"Calçados", 
    "descriptive":"A busca pelo novo e a mistura de materiais é o que da charme e essência as peças produzidas pela Kímika.", 
    "keywords":"", 
    "date":"", 
    "user_id":1
    }; 

    /*this.empresaProvider.add(data).subscribe(res =>{
      console.log(res);
    }, erro => {
      console.log("erro" + erro.message)
    });

    this.empresaProvider.edit(data).subscribe(res =>{
      console.log(res);
    }, erro => {
      console.log("erro" + erro.message)
    });

    this.empresaProvider.delete(data).subscribe(res =>{
      console.log(res);
    }, erro => {
      console.log("erro" + erro.message)
    });*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

}
