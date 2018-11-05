import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListaPromocoes } from '../../interfaces/IListaPromocoes';

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HomeProvider Provider');
  }

  banner(){
    return this.http.get<IListaPromocoes[]>('http://192.168.0.28:8000/api/promotionshome');
  }

}
