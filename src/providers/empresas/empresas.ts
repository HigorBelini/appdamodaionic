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

  all(){
    return this.http.get<IListaEmpresas[]>('http://localhost:3000/companies');
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

  //allTeste(){
    //const lista: IListaEmpresas[] = [
      //{"id":1, "socialname":"Kimika", "fantasyname":"Kimika", "number":2000, "logo":"https://scontent.ffrc5-1.fna.fbcdn.net/v/t1.0-9/26730970_1572789662756978_5864536003222822185_n.png?_nc_cat=100&oh=01bdfde7b6014dd32042a1a89321cbd7&oe=5C18CA1A", "shopfacade":"", "latitude":100, "longitude":200, "industry":"Moda Feminina", "descriptive":"A busca pelo novo e a mistura de materiais é o que da charme e essência as peças produzidas pela Kímika. ", "keywords":"", "date":"", "user_id":1},
      //{"id":2, "socialname":"Talento", "fantasyname":"Talento", "number":3000, "logo":"http://www.curriculonarede.com.br/img_empresas/363/destaque.jpg", "shopfacade":"", "latitude":100, "longitude":200, "industry":"Moda Feminina Plus-Size", "descriptive":"Fundada em Outubro de 1984, a TALENTO se destaca por sua especialização em estampas exclusivas e uma linha variada da moda feminina plus size. Crescemos devido a constante busca pela perfeição, utilizando de pesquisas de mercado internacional. Hoje a TALENTO atinge seus objetivos posicionando-se na vanguarda da moda feminina plus size.", "keywords":"", "date":"", "user_id":1},
      //{"id":3, "socialname":"Moça Trigueira", "fantasyname":"Moça Trigueira", "number":3333, "logo":"https://scontent.ffrc5-1.fna.fbcdn.net/v/t1.0-9/970414_683001675109953_7822767970131432113_n.png?_nc_cat=106&oh=ed06c77907e48f6bea373b6a0c0f285e&oe=5C1AA7FC", "shopfacade":"", "latitude":100, "longitude":200, "industry":"Moda Feminina", "descriptive":"Fundada em Outubro de 1984, a TALENTO se destaca por sua especialização em estampas exclusivas e uma linha variada da moda feminina plus size. Crescemos devido a constante busca pela perfeição, utilizando de pesquisas de mercado internacional. Hoje a TALENTO atinge seus objetivos posicionando-se na vanguarda da moda feminina plus size.", keywords:"", date:"", user_id:1},
      //{"id":4, "socialname":"Pele Macia", "fantasyname":"Pele Macia", "number":4000, "logo":"http://cms.mediaplus.com.br/projetos/nahoraapp/uploads/empresa_logotipo/20160721195902.png", "shopfacade":"", "latitude":100, "longitude":200, "industry":"Moda Feminina", "descriptive":"No mercado desde 1990, a Pele Macia faz parte das pioneiras indústrias de confecções da cidade de Passos, onde hoje é reconhecida como um importante pólo confeccionista do sudoeste de Minas Gerais.", "keywords":"", "date":"", "user_id":1},
      //{"id":5, "socialname":"Balli Modas", "fantasyname":"Balli Modas", "number":5000, "logo":"https://scontent.ffrc5-1.fna.fbcdn.net/v/t1.0-9/43053719_2289897094388796_7291021711573516288_n.jpg?_nc_cat=111&oh=749ed5373779e05807aad48f09977b1e&oe=5C173EA6", "shopfacade":"", "latitude":100, "longitude":200, "industry":"Moda Feminina", "descriptive":"No mercado desde 1990, a Pele Macia faz parte das pioneiras indústrias de confecções da cidade de Passos, onde hoje é reconhecida como um importante pólo confeccionista do sudoeste de Minas Gerais.", "keywords":"", "date":"", "user_id":1},
      //{"id":6, "socialname":"Griffo Moda Masculina", "fantasyname":"Griffo Moda Masculina", "number":6000, "logo":"http://cms.mediaplus.com.br/projetos/nahoraapp/uploads/empresa_logotipo/20160721195902.png", "shopfacade":"", "latitude":100, "longitude":200, "industry":"Moda Masculina", "descriptive":"No mercado desde 1990, a Pele Macia faz parte das pioneiras indústrias de confecções da cidade de Passos, onde hoje é reconhecida como um importante pólo confeccionista do sudoeste de Minas Gerais.", "keywords":"", "date":"", "user_id":1},
      //{"id":7, "socialname":"Sonho Encantado", "fantasyname":"Sonho Encantado", "number":7000, "logo":"https://scontent.ffrc5-1.fna.fbcdn.net/v/t1.0-9/21150290_787973361327829_5189288373239412421_n.jpg?_nc_cat=104&oh=a63d7aef75b93cca4a3915fb7a437d2b&oe=5C57E005", "shopfacade":"", "latitude":100, "longitude":200, "industry":"Moda Infanto-Juvenil", "descriptive":"A Castelo Sonho Encantado iniciou sua história no ano de 1991, temos 26 anos de tradição e experiência, sendo uma empresa especializada no ramo infantil em produtos para bebê e juvenil. Temos um portfólio de mais de 1000 quartos criados e decorados pela designer Luciana Borges e sua equipe. Os ambientes são elaborados seguindo critérios de funcionalidade, estilo e design, com produtos diferenciados e exclusivos.", keywords:"", date:"", user_id:1},
      //{"id":8, "socialname":"Preto e Branco Calçados", "fantasyname":"Preto e Branco Calçados", "number":8000, "logo":"https://scontent.ffrc5-1.fna.fbcdn.net/v/t1.0-9/21032575_1132807973487185_2904497181765316242_n.png?_nc_cat=101&oh=9297f6b7dc6fdb74978ac5b30a934046&oe=5C5BDFA2", "shopfacade":"", "latitude":100, "longitude":200, "industry":"Calçados", "descriptive":"A busca pelo novo e a mistura de materiais é o que da charme e essência as peças produzidas pela Kímika. ", "keywords":"", "date":"", "user_id":1},  
  //];

  //return lista;
  //}

}
