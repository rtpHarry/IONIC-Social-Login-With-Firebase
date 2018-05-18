import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TwitterPage } from '../pages/twitter/twitter';
import { GooglePage } from '../pages/google/google';
import { LinkedinPage } from '../pages/linkedin/linkedin';
import { FacebookPage } from '../pages/facebook/facebook';
import { Facebook } from '@ionic-native/facebook';
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from 'angularfire2/auth'
import { GooglePlus } from '@ionic-native/google-plus';
import { LinkedIn } from '@ionic-native/linkedin';
import { TwitterConnect } from '@ionic-native/twitter-connect';


const firebaseConfig = {
  apiKey: "AIzaSyCUIQZ1yTF4toyJhfwF2qG3x3nWdWsCsqk",
  authDomain: "auth-fabca.firebaseapp.com",
  databaseURL: "https://auth-fabca.firebaseio.com",
  projectId: "auth-fabca",
  storageBucket: "auth-fabca.appspot.com",
  messagingSenderId: "990459860758"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GooglePage,
    FacebookPage,
    LinkedinPage,
    TwitterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GooglePage,
    FacebookPage,
    LinkedinPage,
    TwitterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    GooglePlus,
    LinkedIn,
    TwitterConnect
  ]
})
export class AppModule {}
