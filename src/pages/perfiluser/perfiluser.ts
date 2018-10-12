import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IUsuario } from '../../interfaces/IUsuario';
import { UserProvider} from '../../providers/user/user';
import { LoginPage } from '../login/login';
import { HomemenuPage } from '../homemenu/homemenu';
import { MenuController } from 'ionic-angular';

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

  user:IUsuario = {name:'', email:'', password:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider:UserProvider, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {

    this.userProvider.getStorage("user").then( user =>{ 
      if(user){
        this.user = user;
        this.userProvider.showUsuario(user).subscribe(res => {
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

  editUser(){
    this.userProvider.editUsuario(this.user).subscribe(res => {
      this.user = res;
    }, erro => {
      console.log("Erro: " + erro.message);
    });
  }

}
