import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

}
