import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
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

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
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
    IntroPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserProvider
  ]
})
export class AppModule { }
