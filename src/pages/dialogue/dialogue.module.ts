import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DialoguePage } from './dialogue';

@NgModule({
  declarations: [
    DialoguePage,
  ],
  imports: [
    IonicPageModule.forChild(DialoguePage),
  ],
})
export class DialoguePageModule {}
