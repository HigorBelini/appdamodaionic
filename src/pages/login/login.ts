import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NovouserPage } from '../novouser/novouser';
import { IUsuario } from '../../interfaces/IUsuario';
import { UserProvider} from '../../providers/user/user';

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

  abrirRegisterBot(){
    this.navCtrl.push(NovouserPage);
  }
  
  user:IUsuario = {email:'', password:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider:UserProvider) {
  }

  ionViewDidLoad() {
    
  }

  loginUsuario(){
    this.userProvider.loginUsuario(this.user).subscribe(res => {
      this.userProvider.setStorage("user",res);
    }, erro => {
      console.log("Erro: " + erro.message);
    });
  }

}
