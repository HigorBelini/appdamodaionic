import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { IUsuario } from '../../interfaces/IUsuario';
import { UserProvider} from '../../providers/user/user';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
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

  user:IUsuario = {name:'', email:'', password:'', password_confirmation:""};
  public loader;
  tipo: Boolean;
  abrirLogBot(){
    this.navCtrl.push(LoginPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider:UserProvider, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidEnter() {
    this.carregar();
    console.log('ionViewDidEnter NovouserPage');
    this.fechacarregar();
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

  ok() {
    this.navCtrl.setRoot(LoginPage);
  }

  addUser(){
    this.userProvider.addUsuario(this.user).subscribe(res => {

      if (res) {
        if (res.token) {
          console.log(res);
          this.userProvider.setStorage("user", res);
          this.ok();
          this.exibeMensagem('top', 'Conta criada com sucesso!');
        } else {
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
          if (res.password_confirmation) {
            for (let erro of res.password_confirmation) {
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
