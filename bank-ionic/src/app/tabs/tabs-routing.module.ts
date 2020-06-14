import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'klient-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../klient-list/klient-list.module').then(m => m.KlientListPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../klient-edit/klient-edit.module').then( m => m.KlientEditPageModule)
          }
        ]
      },
      {
        path: 'ucty-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../ucty/ucty.module').then(m => m.UctyPageModule)
          }
          // {
          //   path: 'platba',
          //   loadChildren: () =>
          //     import('../ucty/ucty-platba/ucty-platba.module').then(m => m.UctyPlatbaPageModule)
          // },
          // {
          //   path: 'transakcia:id',
          //   loadChildren: () => import('../ucty/ucty-detail/ucty-detail.module').then( m => m.UctyDetailPageModule)
          // },
          // {
          //   path: 'report:id',
          //   loadChildren: () => import('../ucty/ucty-report/ucty-report.module').then( m => m.UctyReportPageModule)
          // }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/klient-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/klient-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
