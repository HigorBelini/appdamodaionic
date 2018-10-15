import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IListaPromocoes } from '../../interfaces/IListaPromocoes';
import { PromocoesProvider } from '../../providers/promocoes/promocoes';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public domSanitizer: DomSanitizer, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.itens = this.navParams.get('dados');
  }

  carregar() {
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 500
    });
    loader.present();
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromodetalhesPage');
  }

}
