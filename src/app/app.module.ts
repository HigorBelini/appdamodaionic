import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserProvider } from '../providers/user/user';
import { DetalhesPageModule } from '../pages/detalhes/detalhes.module';
import { ComochegarPageModule } from '../pages/comochegar/comochegar.module';
import { AvenidaPageModule } from '../pages/avenida/avenida.module';
import { EmpresaPageModule } from '../pages/empresa/empresa.module';
import { ListaPageModule } from '../pages/lista/lista.module';
import { LoginPageModule } from '../pages/login/login.module';
import { NovouserPageModule } from '../pages/novouser/novouser.module';
import { PerfiluserPageModule } from '../pages/perfiluser/perfiluser.module';
import { PromocoesPageModule } from '../pages/promocoes/promocoes.module';
import { UpdateuserPageModule } from '../pages/updateuser/updateuser.module';
import { HomemenuPageModule } from '../pages/homemenu/homemenu.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { FavoritosPageModule } from '../pages/favoritos/favoritos.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { MapaPageModule } from '../pages/mapa/mapa.module';
import { EmpresasProvider } from '../providers/empresas/empresas';
import { PromocoesProvider } from '../providers/promocoes/promocoes';
import { PromodetalhesPageModule } from '../pages/promodetalhes/promodetalhes.module';
import { IonicStorageModule } from '@ionic/storage';
import { SearchPipe } from '../pipes/search/search';
import { ConfigProvider } from '../providers/config/config';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { UserpromotionProvider } from '../providers/userpromotion/userpromotion';
import { PromodaPageModule } from '../pages/promoda/promoda.module';
import { PromocoescadastradasPageModule } from '../pages/promocoescadastradas/promocoescadastradas.module';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Geolocation } from '@ionic-native/geolocation';

import { GoogleMaps } from '@ionic-native/google-maps';
import { FavoritodetalhePageModule } from '../pages/favoritodetalhe/favoritodetalhe.module';
import { UserpromotiondetalhePageModule } from '../pages/userpromotiondetalhe/userpromotiondetalhe.module';
import { PromocoesporempresaPageModule } from '../pages/promocoesporempresa/promocoesporempresa.module';
import { HomeProvider } from '../providers/home/home';
import { DetfuncpromocaoPageModule } from '../pages/detfuncpromocao/detfuncpromocao.module';
import { FavoritomapaPageModule } from '../pages/favoritomapa/favoritomapa.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AvenidaPageModule,
    ComochegarPageModule,
    DetalhesPageModule,
    EmpresaPageModule,
    ListaPageModule,
    LoginPageModule,
    NovouserPageModule,
    PerfiluserPageModule,
    PromocoesPageModule,
    UpdateuserPageModule,
    HomemenuPageModule,
    IntroPageModule,
    FavoritosPageModule,
    SobrePageModule,
    MapaPageModule,
    PromodetalhesPageModule,
    PromodaPageModule,
    PromocoescadastradasPageModule,
    FavoritodetalhePageModule,
    UserpromotiondetalhePageModule,
    PromocoesporempresaPageModule,
    DetfuncpromocaoPageModule,
    FavoritomapaPageModule,
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserProvider,
    EmpresasProvider,
    PromocoesProvider,
    ConfigProvider,
    FavoritosProvider,
    UserpromotionProvider,
    InAppBrowser,
    HomeProvider
  ]
})
export class AppModule { }
