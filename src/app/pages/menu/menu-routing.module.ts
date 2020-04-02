import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'calendar',
        loadChildren: () => import('../calendar/calendar.module').then( m => m.CalendarPageModule)
      },
      {
        path: 'menu-first',
        loadChildren: () => import('../menu-first/menu-first.module').then( m => m.MenuFirstPageModule)
      },
      {
        path: 'menu-second',
        loadChildren: () => import('../menu-second/menu-second.module').then( m => m.MenuSecondPageModule)
      },
      {
        path: 'confirm-logout',
        loadChildren: () => import('../confirm-logout/confirm-logout.module').then( m => m.ConfirmLogoutPageModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('../tabs/tabs.module').then( m => m.TabsPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu-first',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
