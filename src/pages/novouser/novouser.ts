import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { IUsuario } from '../../interfaces/IUsuario';
import { UserProvider} from '../../providers/user/user';
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

  abrirLogBot(){
    this.navCtrl.push(LoginPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider:UserProvider) {
  }

  ionViewDidLoad() {
    
  }

  addUser(){
    this.userProvider.addUsuario(this.user).subscribe(res => {

      if (res) {
        if (res.token) {
          console.log(res);
          this.userProvider.setStorage("user", res);
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
