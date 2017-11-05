import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuth } from 'angularfire2/auth';
 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
 
  constructor(platform: Platform, afAuth: AngularFireAuth, private statusBar: StatusBar,private splashScreen: SplashScreen) {
    const authObserver = afAuth.authState.subscribe( user => {
      if (user) {
        this.rootPage = 'LoginPage';  // Setting LoginPage to a starting page Aleksi Ukkonen 1601558
        authObserver.unsubscribe();
      } else {
        this.rootPage = 'LoginPage'; // making LoginPage also a secondary starting page so APP start alwayce on a same page Aleksi Ukkonen 1601558
        authObserver.unsubscribe();
      }
    });

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
