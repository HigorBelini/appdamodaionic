import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { IUsuario } from '../../interfaces/IUsuario';
import { UserProvider } from '../../providers/user/user';
import { IFavoritos } from '../../interfaces/IFavoritos';
import { EmpresaPage } from '../empresa/empresa';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NovouserPage } from '../novouser/novouser';
import { ListaPage } from '../lista/lista';
import { PerfiluserPage } from '../perfiluser/perfiluser';
import { HomemenuPage } from '../homemenu/homemenu';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public userProvider: UserProvider,  public alertCtrl: AlertController) {
  }

  cancelar() {
    this.navCtrl.setRoot(HomemenuPage);
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Faça login para visualizar suas lojas favoritas',
      message: 'Com o login, você pode visualizar seus favoritos, além de ter várias outras vantagens. Caso não tenha uma conta clique em "Não tenho uma conta" e crie uma agora mesmo.',
      buttons: [
        {
          text: 'Fazer Login',
          handler: () => {
            this.navCtrl.setRoot(LoginPage);
          }
        },
        {
          text: 'Não tenho Uma Conta',
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
          console.log(res);
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
    });
  }

}
