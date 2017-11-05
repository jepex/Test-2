import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage), // Tellign app that tabs=TabsPage Aleksi Ukkonen 1601558
  ],
})
export class TabsPageModule {}
