import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage), // Telling app that thispage is SignupPage Aleksi Ukkonen 1601558
  ],
})
export class SignupPageModule {}
