import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NovouserPage } from '../novouser/novouser';
import { IUsuario } from '../../interfaces/IUsuario';
import { UserProvider } from '../../providers/user/user';
import { MenuController } from 'ionic-angular';
import { HomemenuPage } from '../homemenu/homemenu';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider, public menuCtrl: MenuController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
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

  carregar(){
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
    }); 
    this.loader.present();
  }

  fechacarregar(){
    this.loader.dismiss();
  }

  showAlertSuccess(){
    const alert = this.alertCtrl.create({
      title: 'Seu login foi efetuado com sucesso. Aproveite!',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertDenied(){
    const alert = this.alertCtrl.create({
      title: 'Erro. E-mail e/ou senha incorreto(s).',
      buttons: ['OK']
    });
    alert.present();
  }

  loginUsuario() {
    this.carregar();
    this.userProvider.loginUsuario(this.user).subscribe(res => {
      if (res) {
        if (res.token) {
          console.log(res);
          this.userProvider.setStorage("user", res);
          this.ativaMenuLogin();
          this.showAlertSuccess();
          this.cancelar();
        } else {
          console.log(res); //validação
          this.showAlertDenied();
        }
      } else {
        // Login com erro!
        this.showAlertDenied();
      }

    }, erro => {
      console.log("Erro: " + erro.message);
      this.showAlertDenied();
    });
    this.fechacarregar();
  }

}
