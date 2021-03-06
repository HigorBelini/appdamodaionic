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
import { IListaEmpresasBusca } from '../../interfaces/IListaEmpresasBusca';

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
  lista: IListaEmpresas[];
  busca: IListaEmpresasBusca[];
  favoritos: IFavoritos[];
  user: IUsuario;
  items: any;
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  searchQuery: string = '';
  
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
      }).catch((error) => {
        console.log('Erro ', error);
      });
    }

    search(event){
      console.log(event.target.value);
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
   this.initializeItems();
  }

  ionViewDidLoad(){
    this.userProvider.getStorage("user").then(user => {
      if (user) {
        this.user = user;
      }
    }).catch((error) => {
      console.log('Erro ', error);
    });
  }

  ionViewDidEnter(){
    this.carregarLista();
  }

carregarLista(){
  this.carregar();
    this.empresaProvider.listaEmpresas().subscribe(res =>{
        this.lista = res;
        this.busca = res;
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
  }

  initializeItems() {
    this.items = this.busca;
    this.lista = [];
  }
  
  getItems(ev: any) {

    this.initializeItems();

    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.fantasyname.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
}