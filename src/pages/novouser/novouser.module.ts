import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovouserPage } from './novouser';

@NgModule({
  declarations: [
    NovouserPage,
  ],
  imports: [
    IonicPageModule.forChild(NovouserPage),
  ],
})
export class NovouserPageModule {}
