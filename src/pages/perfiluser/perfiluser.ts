import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IUsuario } from '../../interfaces/IUsuario';
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';
import { HomemenuPage } from '../homemenu/homemenu';
import { MenuController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NovouserPage } from '../novouser/novouser';

/**
 * Generated class for the PerfiluserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfiluser',
  templateUrl: 'perfiluser.html',
})
export class PerfiluserPage {

  user: IUsuario = { name: '', email: '', password: '', city: '', uf: '', gender: '', datebirth: '', profileimage: '' };
  public loader;
  tipo: Boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider, public menuCtrl: MenuController, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Faça login pra acessar as configurações de usuário',
      message: 'Você deve fazer login para alterar seus dados nas configurações. Caso não tenha uma conta clique em "Não tenho uma conta" e crie uma agora mesmo.',
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


  carregar() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando perfil...",
    });
    this.loader.present();
  }

  carregarEdicao() {
    this.loader = this.loadingCtrl.create({
      content: "Atualizando informações...",
    });
    this.loader.present();
  }

  fechacarregar() {
    this.loader.dismiss();
  }

  ionViewDidEnter() {
    this.userProvider.getStorage("user").then(user => {
      this.carregar();
      if (user) {
        this.user = user;
        this.userProvider.showUsuario(user).subscribe(res => {
          console.log(res);
          this.user = res;
        }, erro => {
          console.log("Erro: " + erro.message);
        });
      } else {
        this.cancelar();
        this.showConfirm();
      }
      this.fechacarregar();
    });
  }

  cancelar() {
    this.navCtrl.setRoot(HomemenuPage);
  }

  ok() {
    this.navCtrl.setRoot(HomePage);
  }

  editUser() {
    this.carregarEdicao();
    this.userProvider.editUsuario(this.user).subscribe(res => {
      if (res) {
        if (res.token) {
          console.log(res);
          this.userProvider.setStorage("user", res);
          this.exibeMensagem('top', 'Perfil atualizado com sucesso!');
          this.ok();
        } else {
          console.log(res); //validação
          let erros = "";
          if (res.name) {
            for (let erro of res.name) {
              erros += erro + " ";
            }
          }
          if (res.email) {
            for (let erro of res.email) {
              erros += erro + " ";
            }
          }
          if (res.password) {
            for (let erro of res.password) {
              erros += erro + " ";
            }
          }
          this.exibeMensagem('top', erros, 5000);
        }
      } else {
        // Login com erro!

      }
    }, erro => {
      console.log("Erro: " + erro.message);

    });
    this.fechacarregar();
  }

  exibeMensagem(position: string, msg: string, tempo: number = 3000) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: tempo,
      position: position
    });
    toast.present();
  }

  exibeSenha(){
    this.tipo = !this.tipo;
  }

}
