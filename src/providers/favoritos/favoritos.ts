import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IListaEmpresas } from '../../interfaces/IListaEmpresas';
import { IFavoritos } from '../../interfaces/IFavoritos';
import { IUsuario } from '../../interfaces/IUsuario';

/*
  Generated class for the FavoritosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritosProvider {
  url: string = 'http://192.168.0.28:8000/api/';
  constructor(public http: HttpClient) {
    console.log('Hello FavoritosProvider Provider');
  }

  favorito(company: IListaEmpresas, user: IUsuario) {
    let company_id = company.id;
    return this.http.post<IFavoritos>(this.url + 'favorites', company_id, { "headers": { "authorization": "Bearer " + user.token } });
  }

}
