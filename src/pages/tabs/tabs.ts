import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AvenidaPage } from '../avenida/avenida';
import { ListaPage } from '../lista/lista';
import { PromocoesPage } from '../promocoes/promocoes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AvenidaPage;
  tab3Root = ListaPage;
  tab4Root = PromocoesPage;
  
  constructor() {

  }
}
