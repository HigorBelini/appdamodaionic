import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NovouserPage } from '../novouser/novouser';
import { IUsuario } from '../../interfaces/IUsuario';
import { UserProvider } from '../../providers/user/user';
import { MenuController } from 'ionic-angular';
import { HomemenuPage } from '../homemenu/homemenu';
import { HomePage } from '../home/home';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {

  }

  ativaMenuLogin() {
    this.menuCtrl.enable(true, 'userComLogin');
    this.menuCtrl.enable(false, 'userSemLogin');
  }

  cancelar() {
    this.navCtrl.setRoot(HomePage);
  }

  loginUsuario() {
    this.userProvider.loginUsuario(this.user).subscribe(res => {
      if (res) {
        if (res.token) {
          console.log(res);
          this.userProvider.setStorage("user", res);
          localStorage.setItem('token', res.token);
          this.ativaMenuLogin();
          this.cancelar();
        } else {
          console.log(res); //validação
        }
      } else {
        // Login com erro!
      }

    }, erro => {
      console.log("Erro: " + erro.message);
    });
  }

}
