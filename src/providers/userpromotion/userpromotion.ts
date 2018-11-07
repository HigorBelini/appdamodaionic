import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IListaPromocoes } from '../../interfaces/IListaPromocoes';
import { IUsuario } from '../../interfaces/IUsuario';
import { ICadastroPromocoes } from '../../interfaces/ICadastroPromocoes';

/*
  Generated class for the UserpromotionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserpromotionProvider {
  url: string = 'http://localhost:8000/api/';
  constructor(public http: HttpClient) {
    console.log('Hello UserpromotionProvider Provider');
  }

  userpromotion(promotion: IListaPromocoes, user: IUsuario) {
    let promotion_id = promotion.id;
    return this.http.post<ICadastroPromocoes>(this.url + 'promotionregistration', promotion_id, { "headers": { "authorization": "Bearer " + user.token } });
  }

  userspromotion(promotion: IListaPromocoes[], user: IUsuario) {
    let promotion_id = [];
      
    for (let i = 0; i < promotion.length; i++){
      promotion_id[i] = promotion[i].id;
    }

    return this.http.post<ICadastroPromocoes>(this.url + 'promotionregistration', promotion_id, { "headers": { "authorization": "Bearer " + user.token } });
  }

}
