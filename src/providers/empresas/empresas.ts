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

  constructor(public http: HttpClient) {
    console.log('Hello EmpresasProvider Provider');
  }

  listaEmpresas(){
    return this.http.get<IListaEmpresas[]>('http://localhost:8000/api/companies');
  }

  show(data:IListaEmpresas){
    return this.http.get<IListaEmpresas>('http://localhost:3000/companies/'+data.id);
  }

  add(data:IListaEmpresas){
    return this.http.post<IListaEmpresas>('http://localhost:3000/companies', data);
  }

  edit(data:IListaEmpresas){
    return this.http.put<IListaEmpresas>('http://localhost:3000/companies/'+data.id, data);
  }

  delete(data:IListaEmpresas){
    return this.http.delete<IListaEmpresas>('http://localhost:3000/companies/'+data.id);
  }

}
