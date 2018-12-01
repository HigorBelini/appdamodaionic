import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { IUsuario } from '../../interfaces/IUsuario';

import { Storage } from '@ionic/storage';
import { ICadastroPromocoes } from '../../interfaces/ICadastroPromocoes';
import { IFavoritos } from '../../interfaces/IFavoritos';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  url: string = 'http://192.168.0.111:8000/api/';

  headers: any;
  constructor(public http: HttpClient, private storage: Storage) {
    
  }

  setStorage(chave, valor){
    this.storage.set(chave, valor);
  }

  getStorage(chave){
   return this.storage.get(chave);
  }

  showUsuario(user: IUsuario) {
    return this.http.get<IUsuario>(this.url + 'user', {"headers": {"authorization": "Bearer " + user.token}});
  }

  addUsuario(data: IUsuario) {
    return this.http.post<IUsuario>(this.url + 'register', data);
  }

  editUsuario(user: IUsuario) {
    return this.http.put<IUsuario>(this.url + 'user', user, {"headers": {"authorization": "Bearer " + user.token}});
  }

  loginUsuario(data: IUsuario) {
    return this.http.post<IUsuario>(this.url + 'login', data);
  }

  listaPromocoes(user: IUsuario) {
    return this.http.get<ICadastroPromocoes[]>(this.url + 'promotionsuserlist',{"headers": {"authorization": "Bearer " + user.token}});
  }

  listaFavoritos(user: IUsuario) {
    return this.http.get<IFavoritos[]>(this.url + 'favoriteuser', {"headers": {"authorization": "Bearer " + user.token}});
  }

}
