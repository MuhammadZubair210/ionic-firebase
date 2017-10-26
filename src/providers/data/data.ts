import { Injectable, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { NavController } from 'ionic-angular';
import { MainPage } from "../../pages/main/main";
import { SignupPage } from "../../pages/signup/signup";
import { HomePage } from "../../pages/home/home";


@Injectable()
export class DataProvider {
  // @ViewChild("appNav") nav: NavController;

  constructor(public http: Http, public af: AngularFireAuth, public db: AngularFireDatabase) {
    console.log('Hello DataProvider Provider');

  }
  signUp(fordata) {
    this.af.auth.createUserWithEmailAndPassword(fordata.email, fordata.password)
      .then((value) => {
        console.log("success", value);
        this.db.object("users/" + value.uid).set(fordata.username)
      })
      .catch((error) => {
        console.log("error", error);
      })
  }
  logIn(formdata) {
    return Promise.resolve(this.af.auth.signInWithEmailAndPassword(formdata.email, formdata.password))
    // this.af.auth.signInWithEmailAndPassword(formdata.email, formdata.password)

      // .then((value) => {
      //   console.log("successfully logged in");
      //   // return true
      //   this.route.push(MainPage)
      // })
      // .catch((error) => {
      //   console.log("not logged in", error);
      //   return false;
      // })
  }


}
