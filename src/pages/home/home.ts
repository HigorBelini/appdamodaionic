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
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


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
    this.navCtrl.push(HomemenuPage);
  }

  abrirLogin() {
    this.navCtrl.push(LoginPage);
  }

  abrirCadastro() {
    this.navCtrl.push(NovouserPage);
  }

  abrirAvenida() {
    this.navCtrl.push(AvenidaPage);
  }

  abrirComoChegar() {
    this.navCtrl.push(ComochegarPage);
  }

  abrirLista() {
    this.navCtrl.push(ListaPage);
  }

  abrirPromocoes() {
    this.navCtrl.push(PromocoesPage);
  }

  perfilUserPage() {
    this.navCtrl.push(PerfiluserPage);
  }

  showAlertSuccess(){
    const alert = this.alertCtrl.create({
      title: 'Você foi desconectado!',
      buttons: ['OK']
    });
    alert.present();
  }

  sair() {
    this.carregar();
    this.userProvider.setStorage("user", null);
    this.menuCtrl.enable(false, 'userComLogin');
    this.menuCtrl.enable(true, 'userSemLogin');
    this.fechacarregar();
    this.showAlertSuccess();
  }

  carregar(){
    this.loader = this.loadingCtrl.create({
      content: "Carregando conteúdo...",
    }); 
    this.loader.present();
  }

  fechacarregar(){
    this.loader.dismiss();
  }

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public navCtrl: NavController, private userProvider: UserProvider, public menuCtrl: MenuController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.initializeApp();
    this.carregar();

    // used for an example of ngFor and navigation
    this.pages1 = [
      { title: 'Home', component: HomemenuPage },
      { title: 'A Avenida', component: AvenidaPage },
      { title: 'Como Chegar', component: ComochegarPage },
      { title: 'Buscar por Lojas', component: ListaPage },
      { title: 'Promoções e Eventos', component: PromocoesPage }

    ];

    this.pages2 = [
      { title: 'Home', component: HomemenuPage },
      { title: 'A Avenida', component: AvenidaPage },
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
    this.fechacarregar();
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
