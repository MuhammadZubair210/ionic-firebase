import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
import { DataProvider } from "../../providers/data/data";
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public data: DataProvider,
    public fb: FormBuilder, ) {
  }
  form: FormGroup;

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  formdata = {
    username: '',
    email: '',
    password: ''
  };
  signup() {
    this.data.signUp(this.formdata);
    console.log("working", this.formdata)
}

  }