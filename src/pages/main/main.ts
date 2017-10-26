import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddpatientdataProvider } from "../../providers/addpatientdata/addpatientdata";
import { AllpatientPage } from "../allpatient/allpatient";
import { AngularFireAuth } from "angularfire2/auth";
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  array = [];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public _patientService: AddpatientdataProvider,
    public af: AngularFireAuth,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  formdata = {
    patientname: '',
    disease: '',
    email: '',
    age: '',
    medication: '',
    date: '',
    cost: '',
    category: 'patient',
    uid: this.af.auth.currentUser.uid,
    phoneNo: '',
  }
  submit() {
    this._patientService.addData(this.formdata);
    this.array.push(this.formdata);
    this.storage.set('data', this.array);

  }


  allpatient() {
    this.navCtrl.push(AllpatientPage)
  }
}
