import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IUsuario } from '../../interfaces/IUsuario';
import { UserProvider} from '../../providers/user/user';
import { LoginPage } from '../login/login';
import { HomemenuPage } from '../homemenu/homemenu';
import { MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

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

  user:IUsuario = {name:'', email:'', password:'',city:'', uf:'', gender:'', datebirth:'', profileimage:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider:UserProvider, public menuCtrl: MenuController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {

    this.userProvider.getStorage("user").then( user =>{ 
      if(user){
        this.user = user;
        this.userProvider.showUsuario(user).subscribe(res => {
          console.log(res);
          this.user = res;
        }, erro => {
          console.log("Erro: " + erro.message);
        });
      }else{
        this.cancelar();
      }
    });

  }

  cancelar(){
    this.navCtrl.setRoot(HomemenuPage);
  }

  ok() {
    this.navCtrl.setRoot(HomePage);
  }

  showAlertSuccess(){
    const alert = this.alertCtrl.create({
      title: 'Seus dados foram atualizados com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertDenied(){
    const alert = this.alertCtrl.create({
      title: 'Houve um erro na atualização de seus dados. Por favor, tente novamente.',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertEmail(){
    const alert = this.alertCtrl.create({
      title: 'Não foi possível atualizar seus dados pois este e-mail já está sendo utilizado por outro usuário.',
      buttons: ['OK']
    });
    alert.present();
  }

  editUser(){
    this.userProvider.editUsuario(this.user).subscribe(res => {
      if (res) {
        if (res.token) {
          console.log(res);
          this.showAlertSuccess();
          this.userProvider.setStorage("user", res);
          this.ok();
        } else {
          console.log(res); //validação
          this.showAlertEmail();
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
