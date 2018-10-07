import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomemenuPage } from './homemenu';

@NgModule({
  declarations: [
    HomemenuPage,
  ],
  imports: [
    IonicPageModule.forChild(HomemenuPage),
  ],
})
export class HomemenuPageModule {}
