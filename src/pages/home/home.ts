import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserProvider } from './../../providers/user/user';
import { NavController } from 'ionic-angular';
import { PerfiluserPage } from '../perfiluser/perfiluser';
import { AvenidaPage } from '../avenida/avenida';
import { ComochegarPage } from '../comochegar/comochegar';
import { ListaPage } from '../lista/lista';
import { PromocoesPage } from '../promocoes/promocoes';
import { HomemenuPage } from '../homemenu/homemenu';
import { LoginPage } from '../login/login';
import { NovouserPage } from '../novouser/novouser';
import { MenuController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { UpdateuserPage } from '../updateuser/updateuser';
import { PromodaPage } from '../promoda/promoda';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UserProvider]
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  public users = [];
  public loader;
  rootPage: any = HomemenuPage;

  pages1: Array<{ title: string, component: any }>;
  pages2: Array<{ title: string, component: any }>;

  carregarlogin(){
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 750
    });
    loader.present();
  }

  carregarloginflash(){
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 1
    });
    loader.present();
  }

  abrirHome() {
    this.carregar();
    this.navCtrl.push(HomemenuPage);
    this.fechacarregar();
  }

  abrirLogin() {
    this.carregar();
    this.navCtrl.push(LoginPage);
    this.fechacarregar();
  }

  abrirCadastro() {
    this.carregar();
    this.navCtrl.push(NovouserPage);
    this.fechacarregar();
  }

  abrirAvenida() {
    this.carregar();
    this.navCtrl.push(AvenidaPage);
    this.fechacarregar();
  }

  abrirComoChegar() {
    this.carregar();
    this.navCtrl.push(ComochegarPage);
    this.fechacarregar();
  }

  abrirLista() {
    this.carregar();
    this.navCtrl.push(ListaPage);
    this.fechacarregar();
  }

  abrirPromocoes() {
    this.carregar();
    this.navCtrl.push(PromocoesPage);
    this.fechacarregar();
  }

  perfilUserPage() {
    this.carregar();
    this.navCtrl.push(UpdateuserPage);
    this.fechacarregar();
  }

  abrirPromoda() {
    this.carregar();
    this.navCtrl.push(PromodaPage);
    this.fechacarregar();
  }

  exibeMensagem(position: string, msg: string, tempo: number = 3000) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: tempo,
      position: position
    });
    toast.present();
  }

  sair() {
    this.carregar();
    this.userProvider.setStorage("user", null);
    this.menuCtrl.enable(false, 'userComLogin');
    this.menuCtrl.enable(true, 'userSemLogin');
    this.fechacarregar();
    this.exibeMensagem('top', 'Logout realizado com sucesso!');
    
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

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public navCtrl: NavController, private userProvider: UserProvider, public menuCtrl: MenuController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages1 = [
      { title: 'Home', component: HomemenuPage },
      { title: 'Como Chegar', component: ComochegarPage },
      { title: 'Buscar por Lojas', component: ListaPage },
      { title: 'Promoções e Eventos', component: PromocoesPage }

    ];

    this.pages2 = [
      { title: 'Home', component: HomemenuPage },
      { title: 'Como Chegar', component: ComochegarPage },
      { title: 'Buscar por Lojas', component: ListaPage },
      { title: 'Promoções e Eventos', component: PromocoesPage }
      
    ];

    this.userProvider.getStorage("user").then(user => {
      if (user) {
        this.menuCtrl.enable(true, 'userComLogin');
        this.menuCtrl.enable(false, 'userSemLogin');
      } else {
        this.menuCtrl.enable(false, 'userComLogin');
        this.menuCtrl.enable(true, 'userSemLogin');
      }
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
