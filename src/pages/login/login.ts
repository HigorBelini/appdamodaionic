import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NovouserPage } from '../novouser/novouser';
import { IUsuario } from '../../interfaces/IUsuario';
import { UserProvider } from '../../providers/user/user';
import { MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  abrirRegisterBot() {
    this.navCtrl.push(NovouserPage);
  }

  user: IUsuario = { email: '', password: '' };
  public loader;
  tipo: Boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider, public menuCtrl: MenuController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidEnter() {
    this.carregar();
    console.log('ionViewDidEnter LoginPage');
    this.fechacarregar();
  }

  ativaMenuLogin() {
    this.menuCtrl.enable(true, 'userComLogin');
    this.menuCtrl.enable(false, 'userSemLogin');
  }

  cancelar() {
    this.navCtrl.setRoot(HomePage);
  }

  carregar() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
    });
    this.loader.present();
  }

  fechacarregar() {
    this.loader.dismiss();
  }

  loginUsuario() {
    this.carregar();
    this.userProvider.loginUsuario(this.user).subscribe(res => {
      if (res) {
        if (res.token) {
          console.log(res);
          this.userProvider.setStorage("user", res);
          this.ativaMenuLogin();
          this.exibeMensagem('top', 'Login realizado com sucesso!');
          this.cancelar();
        } else {
          console.log(res); //validação
          let erros = "";
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
        this.exibeMensagem('top', 'Senha incorreta', 5000);
      }

    }, erro => {
      console.log("Erro: " + erro.message);
      this.exibeMensagem('top', 'Senha incorreta', 5000);
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
