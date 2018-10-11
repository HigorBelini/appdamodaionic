import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfiluserPage } from '../perfiluser/perfiluser';
import { AvenidaPage } from '../avenida/avenida';
import { ComochegarPage } from '../comochegar/comochegar';
import { ListaPage } from '../lista/lista';
import { PromocoesPage } from '../promocoes/promocoes';
import { HomemenuPage } from '../homemenu/homemenu';
import { LoginPage } from '../login/login';
import { NovouserPage } from '../novouser/novouser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[UserProvider]
})
export class HomePage {
  
	public users = [];

  rootPage = HomemenuPage;

  abrirHome(){
    this.navCtrl.push(HomemenuPage);
  }

  abrirLogin(){
    this.navCtrl.push(LoginPage);
  }

  abrirCadastro(){
    this.navCtrl.push(NovouserPage);
  }

  abrirAvenida(){
    this.navCtrl.push(AvenidaPage);
  }

  abrirComoChegar(){
    this.navCtrl.push(ComochegarPage);
  }

  abrirLista(){
    this.navCtrl.push(ListaPage);
  }

  abrirPromocoes(){
    this.navCtrl.push(PromocoesPage);
  }

  constructor(public navCtrl: NavController, private userService:UserProvider) {
  }

}
