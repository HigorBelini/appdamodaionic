import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SobrePage } from '../sobre/sobre';
import { AvenidaPage } from '../avenida/avenida';
import { PromodaPage } from '../promoda/promoda';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AvenidaPage;
  tab3Root = PromodaPage;
  tab4Root = SobrePage;
  
  constructor() {

  }
}
