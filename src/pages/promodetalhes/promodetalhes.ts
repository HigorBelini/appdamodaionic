import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IListaPromocoes } from '../../interfaces/IListaPromocoes';
import { PromocoesProvider } from '../../providers/promocoes/promocoes';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { IUsuario } from '../../interfaces/IUsuario';
import { UserProvider } from '../../providers/user/user';
import { UserpromotionProvider } from '../../providers/userpromotion/userpromotion';
import { PromocoesPage } from '../promocoes/promocoes';
import { LoginPage } from '../login/login';
import { NovouserPage } from '../novouser/novouser';

/**
 * Generated class for the PromodetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promodetalhes',
  templateUrl: 'promodetalhes.html',
})
export class PromodetalhesPage {

  itens:IListaPromocoes;
  user: IUsuario;
  public loader;
  constructor(public navCtrl: NavController, public navParams: NavParams, public domSanitizer: DomSanitizer, public loadingCtrl: LoadingController, public alertCtrl: AlertController , public userProvider: UserProvider, public userpromotionProvider: UserpromotionProvider, public promocoesProvider: PromocoesProvider) {
    this.itens = this.navParams.get('dados');
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Faça login prar se cadastrar nesta promoção',
      message: 'Com o login, você visualiza todos os detalhes, além de poder se cadastrar nas promoções e garantir descontos exclusivos na hora de sua compra. Caso não tenha uma conta clique em "Não tenho uma conta" e crie uma agora mesmo.',
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
            this.navCtrl.setRoot(PromocoesPage);
          }
        }
      ]
    });
    confirm.present();
  }

  carregar(){
    this.loader = this.loadingCtrl.create({
      content: "Carregando detalhes...",
    }); 
    this.loader.present();
  }

  fechacarregar(){
    this.loader.dismiss();
  }

  showAlertSuccess(){
    const alert = this.alertCtrl.create({
      title: 'Cadastro na promoção realizado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertDenied(){
    const alert = this.alertCtrl.create({
      title: 'Você já está cadastrado nessa promoção. Por favor, cadastre-se em outra.',
      buttons: ['OK']
    });
    alert.present();
  }

  cancelar() {
    this.navCtrl.setRoot(PromocoesPage);
  }

  ionViewDidEnter() {
    this.userProvider.getStorage("user").then(user => {
      if (user) {
        this.user = user;
      }
    }).catch((error) => {
      console.log('Erro ', error);
    });
  }

  cadastroempromocao() {
    console.log('Cadastrado na promoção');
    this.userpromotionProvider.userpromotion(this.itens, this.user).subscribe(res => {
      if (res) {
        //console.log(res);
        this.showAlertSuccess();
      }
    }, erro => {
      console.log("Erro: " + erro.message);
    });
  }
}
