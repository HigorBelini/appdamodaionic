import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { IUsuario } from '../../interfaces/IUsuario';
import { UserProvider} from '../../providers/user/user';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the NovouserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novouser',
  templateUrl: 'novouser.html',
})
export class NovouserPage {

  user:IUsuario = {name:'', email:'', password:''};
  public loader;
  abrirLogBot(){
    this.navCtrl.push(LoginPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider:UserProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.carregar();
    console.log('ionViewDidEnter NovouserPage');
    this.fechacarregar();
  }

  carregar(){
    this.loader = this.loadingCtrl.create({
      content: "Carregando promoções...",
    }); 
    this.loader.present();
  }

  fechacarregar(){
    this.loader.dismiss();
  }

  showAlertSuccess(){
    const alert = this.alertCtrl.create({
      title: 'Seu perfil foi criado com sucesso. Aproveite!',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertDenied(){
    const alert = this.alertCtrl.create({
      title: 'Houve um erro na criação de seu perfil.',
      subTitle: 'Certifique-se que suas senhas estão iguais e tem mais de 6 digitos ou troque o e-mail que está utilizando.',
      buttons: ['OK']
    });
    alert.present();
  }

  ok() {
    this.navCtrl.setRoot(LoginPage);
  }

  addUser(){
    this.userProvider.addUsuario(this.user).subscribe(res => {

      if (res) {
        if (res.token) {
          console.log(res);
          this.showAlertSuccess();
          this.userProvider.setStorage("user", res);
          this.ok();
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
  }

}
