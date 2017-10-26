import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { DataProvider } from '../providers/data/data';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { MainPage } from "../pages/main/main";
import { AddpatientdataProvider } from '../providers/addpatientdata/addpatientdata';
import { AllpatientPage } from "../pages/allpatient/allpatient";
import { SinglepatientPage } from "../pages/singlepatient/singlepatient";
import { IonicStorageModule } from '@ionic/storage';

export const config = {
  apiKey: "AIzaSyAmfWpQxO1yT6a0nFLkavKraAzVbG2ETrc",
  authDomain: "ionic-2-patient-tracker.firebaseapp.com",
  databaseURL: "https://ionic-2-patient-tracker.firebaseio.com",
  projectId: "ionic-2-patient-tracker",
  storageBucket: "ionic-2-patient-tracker.appspot.com",
  messagingSenderId: "417430465466"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    MainPage,
    AllpatientPage,
    SinglepatientPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    IonicStorageModule.forRoot(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule,
    //  NavController
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    MainPage,
    AllpatientPage,
    SinglepatientPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider,
    AngularFireDatabaseModule,
    AddpatientdataProvider,
  ]
})
export class AppModule { }
