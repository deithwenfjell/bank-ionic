import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KlientEditPageRoutingModule } from './klient-edit-routing.module';

import { KlientEditPage } from './klient-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KlientEditPageRoutingModule
  ],
  declarations: [KlientEditPage]
})
export class KlientEditPageModule {}
