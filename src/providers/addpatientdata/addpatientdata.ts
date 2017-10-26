import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from "angularfire2/database";
import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from "angularfire2/auth";

/*
  Generated class for the AddpatientdataProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddpatientdataProvider {
  // getData = FirebaseListObserveble < any[] >

  constructor(public http: Http, public db: AngularFireDatabase,public af:AngularFireAuth) {
    console.log('Hello AddpatientdataProvider Provider');
  }

  addData(formdata) {
    this.db.list('patientdata/').push(formdata)
  }

  // viewAllpatientData(){
  //   this.getData = this.db.list('patientdata/').
  //   }
}
