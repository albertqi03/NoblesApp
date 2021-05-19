import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'afternoon-program',
        loadChildren: () => import('../afternoon-program/afternoon-program.module').then(m => m.AfternoonProgramPageModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('../calendar/calendar.module').then(m => m.CalendarPageModule)
      },
      {
        path: 'nobleman',
        loadChildren: () => import('../nobleman/nobleman.module').then(m => m.NoblemanPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'settings/themes',
        loadChildren: () => import('../themes/themes.module').then(m => m.ThemesPageModule)
      },
      {
        path: 'settings/notifications',
        loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'settings/send-feedback',
        loadChildren: () => import('../send-feedback/send-feedback.module').then(m => m.SendFeedbackPageModule)
      },
      {
        path: 'settings/about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule)
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
export class MenuPageRoutingModule { }
