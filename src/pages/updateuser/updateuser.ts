import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfiluserPage } from '../perfiluser/perfiluser';
import { PromocoescadastradasPage } from '../promocoescadastradas/promocoescadastradas';

/**
 * Generated class for the UpdateuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updateuser',
  templateUrl: 'updateuser.html',
})
export class UpdateuserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  perfilPage() {
    this.navCtrl.push(PerfiluserPage);
  }

  promotionsPage() {
    this.navCtrl.push(PromocoescadastradasPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateuserPage');
  }

}
