import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PorkPage } from './pork';

@NgModule({
  declarations: [
    PorkPage,
  ],
  imports: [
    IonicPageModule.forChild(PorkPage),
  ],
})
export class PorkPageModule {}
