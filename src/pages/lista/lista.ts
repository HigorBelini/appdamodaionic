import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EmpresaPage } from '../empresa/empresa';

import { IListaEmpresas } from '../../interfaces/IListaEmpresas';

import { EmpresasProvider } from '../../providers/empresas/empresas';
import { LoadingController } from 'ionic-angular';
import { IFavoritos } from '../../interfaces/IFavoritos';
import { IUsuario } from '../../interfaces/IUsuario';
import { UserProvider} from '../../providers/user/user';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';
import { NovouserPage } from '../novouser/novouser';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
  lista: IListaEmpresas[];
  favoritos: IFavoritos[];
  user: IUsuario;
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  
    abrirPagEmpresa(itens){
      this.userProvider.getStorage("user").then(user => {
        this.carregar();
        if (user) {
        this.user = user;
        this.navCtrl.push(EmpresaPage,{dados:itens});
        } else {
        this.cancelar();
        this.showConfirm();
        }
        this.fechacarregar();
      });
    }

    showConfirm() {
      const confirm = this.alertCtrl.create({
        title: 'Faça login para visualizar todos os detalhes desta empresa',
        message: 'Com o login, você visualiza todos os detalhes, e ainda consegue adicionar o site em seus favoritos. Caso não tenha uma conta clique em "Criar uma conta" e crie uma agora mesmo.',
        buttons: [
          {
            text: 'Fazer Login',
            handler: () => {
              this.navCtrl.setRoot(LoginPage);
            }
          },
          {
            text: 'Criar uma conta',
            handler: () => {
              this.navCtrl.setRoot(NovouserPage);
            }
          },
          {
            text: 'Cancelar',
            handler: () => {
              this.navCtrl.setRoot(ListaPage);
            }
          }
        ]
      });
      confirm.present();
    }
  
    cancelar() {
      this.navCtrl.setRoot(ListaPage);
    }

    carregar(){
      this.loader = this.loadingCtrl.create({
        content: "Carregando empresas...",
      }); 
      this.loader.present();
    }

    fechacarregar(){
      this.loader.dismiss();
    }

    recarregar(refresher) {
      this.refresher = refresher;
      this.isRefreshing = true;
      this.carregarLista();
    }

  constructor(public navCtrl: NavController, public navParams: NavParams, public empresaProvider: EmpresasProvider, public loadingCtrl: LoadingController, public userProvider:UserProvider, public favoritoProvider: FavoritosProvider, public alertCtrl: AlertController) {
   //this.lista = this.empresaProvider.all();
   
  }

  ionViewDidLoad(){
    this.userProvider.getStorage("user").then(user => {
      if (user) {
        this.user = user;
      }
    });
  }

  ionViewDidEnter(){
    this.carregarLista();
  }

carregarLista(){
  this.carregar();
    this.empresaProvider.listaEmpresas().subscribe(res =>{
      this.lista = res;
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
    }, erro => {
      console.log("erro" + erro.message)
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
    });
    console.log('ionViewDidEnter ListaPage');
    this.fechacarregar();
    /*if(this.isRefreshing){
      this.refresher.complete();
      this.isRefreshing = false;
    }*/
  }

  /*favorito(){
    console.log('Favorito');
    this.favoritoProvider.favorito(this.lista, this.user).subscribe(res => {
      if(res){
        console.log(res);
      }
    }, erro =>{
      console.log("Erro: "+erro.message);
    });
  }*/
  
  
}