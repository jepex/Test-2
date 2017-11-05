import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from '../login/login';


@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage), // telling APP that login=LoginPage Aleksi Ukkonen 1601558
  ],
})
export class LoginPageModule {}
