import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";

/**
 * Generated class for the SinglepatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singlepatient',
  templateUrl: 'singlepatient.html',
})
export class SinglepatientPage {
  character = [];
  // items: FirebaseListObservable<any[]>
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    // this.items = db.list('/patientdata', {
    //   query: {
    //     orderByKey: true,
    //   }
    // });
    this.items = this.navParams.get('dat');
    console.log(this.items)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SinglepatientPage');
  }

}
