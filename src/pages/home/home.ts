import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfiluserPage } from '../perfiluser/perfiluser';
import { AvenidaPage } from '../avenida/avenida';
import { ComochegarPage } from '../comochegar/comochegar';
import { ListaPage } from '../lista/lista';
import { PromocoesPage } from '../promocoes/promocoes';
import { HomemenuPage } from '../homemenu/homemenu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[UserProvider]
})
export class HomePage {
  
	public users = [];

  rootPage = HomemenuPage;

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

	public userCadastro = {"name":"", "email":"", "password":null};

  constructor(public navCtrl: NavController, private userService:UserProvider) {
  	this.getUsers();
  }

  public getUsers(){
  	this.userService.findAll().subscribe(response => this.users = response);
  }

  public salvarUser(){
  	this.userService.salvar(this.userCadastro).subscribe(response => this.getUsers());
  }

}
