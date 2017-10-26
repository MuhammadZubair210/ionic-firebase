import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SinglepatientPage } from './singlepatient';

@NgModule({
  declarations: [
    SinglepatientPage,
  ],
  imports: [
    IonicPageModule.forChild(SinglepatientPage),
  ],
})
export class SinglepatientPageModule {}
