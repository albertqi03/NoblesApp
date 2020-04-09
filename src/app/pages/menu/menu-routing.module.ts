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
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'settings/notifications',
        loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'settings/send-feedback',
        loadChildren: () => import('../send-feedback/send-feedback.module').then( m => m.SendFeedbackPageModule)
      },
      {
        path: 'settings/about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
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
