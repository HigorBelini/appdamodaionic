import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { IFavoritos } from '../../interfaces/IFavoritos';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NovouserPage } from '../novouser/novouser';
import { HomemenuPage } from '../homemenu/homemenu';
import { FavoritodetalhePage } from '../favoritodetalhe/favoritodetalhe';

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

  abrirPagEmpresaFav(itens){
    this.navCtrl.push(FavoritodetalhePage,{dados:itens});
  }

  fechacarregar(){
    this.loader.dismiss();
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public userProvider: UserProvider,  public alertCtrl: AlertController) {
  }

  cancelar() {
    this.navCtrl.setRoot(HomemenuPage);
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Faça login para visualizar suas lojas favoritas',
      message: 'Com o login, você pode visualizar seus favoritos, além de ter várias outras vantagens. Caso não tenha uma conta clique em "Criar uma conta" e crie uma agora mesmo.',
      buttons: [
        {
          text: 'Fazer Login',
          handler: () => {
            this.navCtrl.setRoot(LoginPage);
          }
        },
        {
          text: 'Criar uma conta',
          handler: () => {
            this.navCtrl.setRoot(NovouserPage);
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            this.navCtrl.setRoot(HomemenuPage);
          }
        }
      ]
    });
    confirm.present();
  }
  
  ionViewDidEnter() {
    this.userProvider.getStorage("user").then(user => {
      this.carregar();
      if (user) {
        this.userProvider.listaFavoritos(user).subscribe(res => {
          this.favoritos = res;
          this.fechacarregar();
        }, erro => {
          console.log("Erro: " + erro.message);
          this.fechacarregar();
        });
      } else {
        this.cancelar();
        this.fechacarregar();
        this.showConfirm();
      }
    }).catch((error) => {
      console.log('Erro ', error);
    });
  }

}
