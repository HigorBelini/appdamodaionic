import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IListaPromocoes} from '../../interfaces/IListaPromocoes';

@Injectable()
export class PromocoesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PromocoesProvider Provider');
  }

  all(){
    return this.http.get<IListaPromocoes[]>('http://192.168.0.111:8000/api/promotions');
  }

  banner(){
    return this.http.get<IListaPromocoes[]>('http://192.168.0.111:8000/api/promotionshome');
  }

  show(data:IListaPromocoes){
    return this.http.get<IListaPromocoes>('http://192.168.0.111:8000/api/promotions/'+data.id);
  }

  add(data:IListaPromocoes){
    return this.http.post<IListaPromocoes>('http://192.168.0.111:8000/api/promotions/', data);
  }

  edit(data:IListaPromocoes){
    return this.http.put<IListaPromocoes>('http://192.168.0.111:8000/api/promotions/'+ data.id, data);
  }

  delete(data:IListaPromocoes){
    return this.http.delete<IListaPromocoes>('http://192.168.0.111:8000/api/promotions/'+ data.id);
  }

}
