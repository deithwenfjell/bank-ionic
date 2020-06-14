import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KlientEditPage } from './klient-edit.page';

const routes: Routes = [
  {
    path: '',
    component: KlientEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KlientEditPageRoutingModule {}
