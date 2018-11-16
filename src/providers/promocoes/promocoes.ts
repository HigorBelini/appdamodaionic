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
    return this.http.get<IListaPromocoes[]>('http://192.168.0.107:8000/api/promotions');
  }

  banner(){
    return this.http.get<IListaPromocoes[]>('http://192.168.0.107:8000/api/promotionshome');
  }

  show(data:IListaPromocoes){
    return this.http.get<IListaPromocoes>('http://192.168.0.107:8000/api/promotions/'+data.id);
  }

  add(data:IListaPromocoes){
    return this.http.post<IListaPromocoes>('http://192.168.0.107:8000/api/promotions/', data);
  }

  edit(data:IListaPromocoes){
    return this.http.put<IListaPromocoes>('http://192.168.0.107:8000/api/promotions/'+ data.id, data);
  }

  delete(data:IListaPromocoes){
    return this.http.delete<IListaPromocoes>('http://192.168.0.107:8000/api/promotions/'+ data.id);
  }

  /*promotionscompany(promotion: IListaPromocoes[]) {
    let company_id = [];
    for (let i = 0; i < promotion.length; i++) {
      company_id[i] = promotion[i].company_id;
    }
    
    return this.http.post<IListaPromocoes>('http://localhost:8000/api/promotionscompany', company_id);
  }*/

}
