import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { NovouserPage } from '../novouser/novouser';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})


export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  carregar() {
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 750
    });
    loader.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  goToTabs(){
    this.navCtrl.push(TabsPage);
  }

  goToRegister(){
    this.navCtrl.push(NovouserPage);
  }

  goToFazerLogin(){
    this.navCtrl.push(LoginPage);
  }

}
