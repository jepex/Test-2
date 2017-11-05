import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';

@NgModule({
  declarations: [
    MenuPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPage), //Telling app that menu=MenuPage Aleksi Ukkonen 1601558
  ],
})
export class MenuPageModule {}
