import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PorkPage } from '../pork/pork';
import { RicePage } from '../rice/rice';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab4Root = RicePage;
  tab3Root = PorkPage;

  constructor() {

  }
}
