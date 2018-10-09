import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresaPage } from '../empresa/empresa';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
  lista = [
    {id:1, nome:"Kimika", descricao:"A busca pelo novo e a mistura de materiais é o que da charme e essência as peças produzidas pela Kímika. ", ramo:"Moda Feminina.", img:"https://scontent.ffrc5-1.fna.fbcdn.net/v/t1.0-9/26730970_1572789662756978_5864536003222822185_n.png?_nc_cat=100&oh=01bdfde7b6014dd32042a1a89321cbd7&oe=5C18CA1A"},
    {id:2, nome:"Talento", descricao:"Fundada em Outubro de 1984, a TALENTO se destaca por sua especialização em estampas exclusivas e uma linha variada da moda feminina plus size. Crescemos devido a constante busca pela perfeição, utilizando de pesquisas de mercado internacional. Hoje a TALENTO atinge seus objetivos posicionando-se na vanguarda da moda feminina plus size.", ramo:"Moda Feminina.", img:"http://www.curriculonarede.com.br/img_empresas/363/destaque.jpg"},
    {id:3, nome:"Moça Trigueira", descricao:"Fundada em Outubro de 1984, a TALENTO se destaca por sua especialização em estampas exclusivas e uma linha variada da moda feminina plus size. Crescemos devido a constante busca pela perfeição, utilizando de pesquisas de mercado internacional. Hoje a TALENTO atinge seus objetivos posicionando-se na vanguarda da moda feminina plus size.", ramo:"Moda Feminina.", img:"https://scontent.ffrc5-1.fna.fbcdn.net/v/t1.0-9/970414_683001675109953_7822767970131432113_n.png?_nc_cat=106&oh=ed06c77907e48f6bea373b6a0c0f285e&oe=5C1AA7FC"},
    {id:4, nome:"Pele Macia",  descricao:"No mercado desde 1990, a Pele Macia faz parte das pioneiras indústrias de confecções da cidade de Passos, onde hoje é reconhecida como um importante pólo confeccionista do sudoeste de Minas Gerais.", ramo:"Moda Feminina.", img:"http://cms.mediaplus.com.br/projetos/nahoraapp/uploads/empresa_logotipo/20160721195902.png"},
    {id:5, nome:"Balli Modas", descricao:"No mercado desde 1990, a Pele Macia faz parte das pioneiras indústrias de confecções da cidade de Passos, onde hoje é reconhecida como um importante pólo confeccionista do sudoeste de Minas Gerais.", ramo:"Moda Feminina", img:"https://scontent.ffrc5-1.fna.fbcdn.net/v/t1.0-9/43053719_2289897094388796_7291021711573516288_n.jpg?_nc_cat=111&oh=749ed5373779e05807aad48f09977b1e&oe=5C173EA6"},
    {id:6, nome:"Griffo Moda Masculina",descricao:"Fundada em Outubro de 1984, a TALENTO se destaca por sua especialização em estampas exclusivas e uma linha variada da moda feminina plus size. Crescemos devido a constante busca pela perfeição, utilizando de pesquisas de mercado internacional. Hoje a TALENTO atinge seus objetivos posicionando-se na vanguarda da moda feminina plus size.", ramo:"Moda Masculina.", img:"http://cms.mediaplus.com.br/projetos/nahoraapp/uploads/empresa_logotipo/20160706163639.jpg"},
    {id:7, nome:"Sonho Encantado", descricao:"A Castelo Sonho Encantado iniciou sua história no ano de 1991, temos 26 anos de tradição e experiência, sendo uma empresa especializada no ramo infantil em produtos para bebê e juvenil. Temos um portfólio de mais de 1000 quartos criados e decorados pela designer Luciana Borges e sua equipe. Os ambientes são elaborados seguindo critérios de funcionalidade, estilo e design, com produtos diferenciados e exclusivos.", ramo:"Moda Infanto-juvenil", img:"https://scontent.ffrc5-1.fna.fbcdn.net/v/t1.0-9/21150290_787973361327829_5189288373239412421_n.jpg?_nc_cat=104&oh=a63d7aef75b93cca4a3915fb7a437d2b&oe=5C57E005"},
    {id:8, nome:"Preto e Branco Calçados", descricao:"", ramo:"Calçados", img:"https://scontent.ffrc5-1.fna.fbcdn.net/v/t1.0-9/21032575_1132807973487185_2904497181765316242_n.png?_nc_cat=101&oh=9297f6b7dc6fdb74978ac5b30a934046&oe=5C5BDFA2"} 
];
    abrirPagEmpresa(itens){
      this.navCtrl.push(EmpresaPage,{dados:itens});
    }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

}
