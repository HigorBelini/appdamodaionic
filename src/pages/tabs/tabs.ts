import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FavoritosPage } from '../favoritos/favoritos';
import { SobrePage } from '../sobre/sobre';
import { PerfiluserPage } from '../perfiluser/perfiluser';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FavoritosPage;
  tab3Root = SobrePage;
  tab4Root = PerfiluserPage;
  
  constructor() {

  }
}
