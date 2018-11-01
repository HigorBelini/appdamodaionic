import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ICadastroPromocoes } from '../../interfaces/ICadastroPromocoes';
import { UserpromotiondetalhePage } from '../userpromotiondetalhe/userpromotiondetalhe';

/**
 * Generated class for the PromocoescadastradasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promocoescadastradas',
  templateUrl: 'promocoescadastradas.html',
})
export class PromocoescadastradasPage {
  promocoes:ICadastroPromocoes[];
  public loader;
  
  abrirPagPromoUserDetalhes(itens){
    this.navCtrl.push(UserpromotiondetalhePage,{dados:itens});
  }

  carregar() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando favoritos...",
    });
    this.loader.present();
  }

  fechacarregar(){
    this.loader.dismiss();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public userProvider: UserProvider) {
  }

  ionViewDidEnter() {
    this.carregar();
    this.userProvider.getStorage("user").then(user => {
      if (user) {
       
        this.userProvider.listaPromocoes(user).subscribe(res => {
          //console.log(res);
          this.promocoes = res;
        }, erro => {
          console.log("Erro: " + erro.message);
        });
      }
    });
    this.fechacarregar();
  }

}
