import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListaPromocoes } from '../../interfaces/IListaPromocoes';

@Injectable()
export class HomeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HomeProvider Provider');
  }

  banner(){
    return this.http.get<IListaPromocoes[]>('http://192.168.0.111:8000/api/promotionshome');
  }

}
