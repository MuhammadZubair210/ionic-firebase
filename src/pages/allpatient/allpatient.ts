import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { Subject } from "rxjs/Subject";
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from "../home/home";
import { MainPage } from "../main/main";
import { ModalController } from 'ionic-angular';
import { SinglepatientPage } from "../singlepatient/singlepatient";
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AllpatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allpatient',
  templateUrl: 'allpatient.html',
})
export class AllpatientPage {
  searchControl: FormControl;
  items: FirebaseListObservable<any[]>
  sizeSubject: Subject<any>;
  keys = [];
  data = [];
  k;
  singledata;
  dataa = [];
  search;
  searchTerm: "";
  constructor(public db: AngularFireDatabase, public navCtrl: NavController,
    public navParams: NavParams, public af: AngularFireAuth,
    public modalCtrl: ModalController, public storage: Storage) {

    // Or to get a key/value pair
    this.storage.get('data').then((val) => {
      console.log(val);
    });



    this.initializeItems();

    this.items = this.db.list('/patientdata', { preserveSnapshot: true });
    this.items
      .subscribe(snapshots => {
        this.dataa = [];
        this.singledata;
        this.keys = [];
        this.search;
        snapshots.forEach(snapshot => {
          console.log(snapshot.key)
          this.keys.push(snapshot.key);
          if (snapshot.val().uid == this.af.auth.currentUser.uid) {
            this.dataa.push(snapshot.val())

          }
        });
      })
    console.log(this.keys)
  }

  initializeItems() {
    this.items = this.db.list('/patientdata', { preserveSnapshot: true });
    this.items
      .subscribe(snapshots => {
        this.dataa = [];
        this.singledata;
        this.keys = [];
        this.search;
        snapshots.forEach(snapshot => {
          console.log(snapshot.key)
          this.keys.push(snapshot.key);
          if (snapshot.val().uid == this.af.auth.currentUser.uid) {
            this.dataa.push(snapshot.val())
          }
        });
      })
    console.log(this.keys)

  }


  getItems(ev) {
    // Reset items back to all of the items
    // this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.dataa = this.dataa.filter((item) => {
        console.log(item)
        return (item.patientname.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.date.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllpatientPage');

    // this.filterItems();

    // this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

    //   this.filterItems();

    // });
  }
  filterBy(size: string) {
    this.sizeSubject.next(size);
  }
  presentModal(key) {
    this.navCtrl.push(SinglepatientPage, { dat: this.dataa[key] })
    console.log(this.data)
  }
}
