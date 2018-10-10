import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IListaPromocoes} from '../../interfaces/IListaPromocoes';
/*
  Generated class for the PromocoesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PromocoesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PromocoesProvider Provider');
  }

  all(){
    return this.http.get<IListaPromocoes[]>('http://localhost:3000/promotions');
  }

  add(data:IListaPromocoes){
    return this.http.post<IListaPromocoes>('http://localhost:3000/promotions', data);
  }
  //all(){
    //const lista: IListaPromocoes[] = [
     // {"id":1, "company_id":1, "name":"Blusas de Inverno 50% OFF", "startdate":"2018-12-12", "finaldate":"2018-12-31", "descriptive":"Atenção! Neste final de ano estamos liquidando nosso estoque de inverno. Venha aproveitar.", "user_id":1, "promotionimage":"https://secondchanceskamloops.files.wordpress.com/2017/07/8898172-50-off-rubber-stamp-stock-vector-half.jpg"},
     // {"id":2, "company_id":2, "name":"Sapatos e Sandálias", "startdate":"2018-12-05", "finaldate":"2018-12-20", "descriptive":"Atenção! Neste final de ano estamos liquidando nosso estoque para renovação. Venha aproveitar. Temos produtos com até 50% de desconto", "user_id":1, "promotionimage":"http://s3.amazonaws.com/mapa-da-obra-producao/wp-content/uploads/2018/01/queima-de-estoque.jpg"},
  //];

  //return lista;
  //}


}
