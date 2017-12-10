import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';



import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AuthProvider } from '../providers/auth/auth';

import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseConfig = { // setting up firebase credentials so my app can connect to firebase when authenticating Aleksi Ukkonen 1601558
  apiKey: "AIzaSyBsobL0nRUCenfBooXxbII4s8Wm9zsdbPg",
  authDomain: "test-2-17404.firebaseapp.com",
  databaseURL: "https://test-2-17404.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "205997282161"
};

@NgModule({
  declarations: [
    MyApp,
    
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
