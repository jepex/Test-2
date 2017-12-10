import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 
  // Telling app what are these tabXRoot pages Aleksi Ukkonen 1601558
  tab1Root: any = 'Tab1Page';
  tab2Root: any = 'Tab2Page';
  tab3Root: any = 'Tab3Page';
  tab4Root: any = 'Tab4Page';
  tab5Root: any = 'TeamPage';
  tab6Root: any = 'SoftPage';
  specialRoot: any = 'SpecialPage';
  
  myIndex: number;
 
  constructor(navParams: NavParams) {
  
    this.myIndex = navParams.data.tabIndex || 0;
  }
}