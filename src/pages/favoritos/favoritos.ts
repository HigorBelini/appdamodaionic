import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { IUsuario } from '../../interfaces/IUsuario';
import { UserProvider } from '../../providers/user/user';
import { IFavoritos } from '../../interfaces/IFavoritos';
import { EmpresaPage } from '../empresa/empresa';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  public loader;
  favoritos:IFavoritos[];
  carregar() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando favoritos...",
    });
    this.loader.present();
  }

  abrirPagEmpresa(itens){
    this.navCtrl.push(EmpresaPage,{dados:itens});
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
        
        this.userProvider.listaFavoritos(user).subscribe(res => {
          console.log(res);
          this.favoritos = res;
        }, erro => {
          console.log("Erro: " + erro.message);
        });
      } 
    });
    this.fechacarregar();
  }

  datafavoritos(date:string){
    let aux = date.split('-');
    let aux2 = date.split(':');
    return aux2[0] + ':' + aux2[1] + ':' + aux2[2];
  }

}
