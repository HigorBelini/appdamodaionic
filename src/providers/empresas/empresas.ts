import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IListaEmpresas } from '../../interfaces/IListaEmpresas';


/*
  Generated class for the EmpresasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmpresasProvider {
  data: any;
  constructor(public http: HttpClient) {
    console.log('Hello EmpresasProvider Provider');
  }

  listaEmpresas() {
    return this.http.get<IListaEmpresas[]>('http://192.168.0.107:8000/api/companies');
    //http://192.168.0.50:8000/api/companies/
  }

  show(data: IListaEmpresas) {
    return this.http.get<IListaEmpresas>('http://192.168.0.107:8000/api/companies/' + data.id);
  }

  add(data: IListaEmpresas) {
    return this.http.post<IListaEmpresas>('http://192.168.0.107:8000/api/companies/', data);
  }

  edit(data: IListaEmpresas) {
    return this.http.put<IListaEmpresas>('http://192.168.0.107:8000/api/companies/' + data.id, data);
  }

  delete(data: IListaEmpresas) {
    return this.http.delete<IListaEmpresas>('http://192.168.0.107:8000/api/companies/' + data.id);
  }

}
