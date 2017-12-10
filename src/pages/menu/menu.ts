import { Tab2Page } from './../tab2/tab2';
import { Tab1Page } from './../tab1/tab1';
import { Tab3Page } from './../tab3/tab3';
import { Tab4Page } from './../tab4/tab4';
import { SoftPage } from './../soft/soft';
import { TeamPage } from './../team/team';
import { SpecialPage } from './../special/special';
import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
 
// Setting up types of things i needed with menu bar Aleksi Ukkonen 1601558
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';
 
  @ViewChild(Nav) nav: Nav;
 
  // Creating a menu bar with a 5 pages Aleksi Ukkonen 1601558
  pages: PageInterface[] = [
    { title: 'Profile', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
    { title: 'Technical Skills', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'home' },
    { title: 'Project Works', pageName: 'TabsPage', tabComponent: 'Tab3Page', index: 2, icon: 'contacts' },
    { title: 'Extra CV activities', pageName: 'TabsPage', tabComponent: 'Tab4Page', index: 3, icon: 'contacts' },
    { title: 'Team Projects', pageName: 'TabsPage', tabComponent: 'TeamPage', index: 4, icon: 'home' },
    { title: 'Soft Skills', pageName: 'TabsPage', tabComponent: 'SoftPage', index: 5, icon: 'contacts' },
    { title: 'Contacts', pageName: 'TabsPage', tabComponent: 'SpecialPage', index: 6, icon: 'contacts' },
  ];
 
  constructor(public navCtrl: NavController) { }
 
  openPage(page: PageInterface) {
    let params = {};
 
   // page index tells app what tab is what Aleksi Ukkonen 1601558
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // Making menu bar able to select item Aleksi Ukkonen 1601558
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
    
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Telling app what to do if no active tabs Aleksi Ukkonen 1601558
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
 
}
