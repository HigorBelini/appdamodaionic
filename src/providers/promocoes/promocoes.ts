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
    return this.http.get<IListaPromocoes[]>('http://localhost:8000/api/promotions');
  }

  show(data:IListaPromocoes){
    return this.http.get<IListaPromocoes>('http://localhost:8000/api/promotions/'+data.id);
  }

  add(data:IListaPromocoes){
    return this.http.post<IListaPromocoes>('http:/localhost:8000/api/promotions/', data);
  }

  edit(data:IListaPromocoes){
    return this.http.put<IListaPromocoes>('http://localhost:8000/api/promotions/'+ data.id, data);
  }

  delete(data:IListaPromocoes){
    return this.http.delete<IListaPromocoes>('http:/localhost:8000/api/promotions/'+ data.id);
  }

}
