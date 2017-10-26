import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from "../signup/signup";
import { AngularFireAuth } from "angularfire2/auth";
import { DataProvider } from "../../providers/data/data";
import { MainPage } from "../main/main";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public af: AngularFireAuth,
    public data: DataProvider) {
    this.af.authState.subscribe((user) => {
      if (user) {
        this.navCtrl.push(MainPage)
      }
      else {
        this.navCtrl.push(HomePage)
      }
    })
  }
  formdata = {
    email: '',
    password: ''
  }

  login() {
    this.data.logIn(this.formdata)
      .then((success) => {
        console.log(this.af.auth.currentUser.uid)
        this.navCtrl.push(MainPage)
      })
      .catch((err) => {
        console.log("failed", err)
      })
  }

  newpage() {
    if (this.navCtrl.push(SignupPage)) {
    }
  }
  //   mainpage() {
  //   this.navCtrl.push(MainPage)
  // }
}
