import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
  // {
  //   path: 'ucty',
  //   loadChildren: () => import('./ucty/ucty.module').then( m => m.UctyPageModule)
  // }
  // {
  //   path: 'klient-edit/:id',
  //   loadChildren: () => import('./klient-edit/klient-edit.module').then( m => m.KlientEditPageModule)
  // },
  // {
  //   path: 'klient-list',
  //   loadChildren: () => import('./klient-list/klient-list.module').then( m => m.KlientListPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
