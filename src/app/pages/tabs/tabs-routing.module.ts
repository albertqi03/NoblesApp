import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        loadChildren: () => import('../schedule/schedule.module').then( m => m.SchedulePageModule)
      },
      {
        path: 'directory',
        loadChildren: () => import('../directory/directory.module').then( m => m.DirectoryPageModule)
      },
      {
        path: 'castle',
        loadChildren: () => import('../castle/castle.module').then( m => m.CastlePageModule)
      },
      {
        path: 'athletics',
        loadChildren: () => import('../athletics/athletics.module').then( m => m.AthleticsPageModule)
      },
      {
        path: 'my-info',
        loadChildren: () => import('../my-info/my-info.module').then( m => m.MyInfoPageModule)
      },
      {
        path: 'castle/make-res',
        loadChildren: () => import('../make-res/make-res.module').then(m => m.MakeResPageModule)
      },
      {
        path: 'directory/dir-list',
        loadChildren: () => import('../dir-list/dir-list.module').then( m => m.DirListPageModule)
      },
      {
        path: 'directory/dir-list/view-person',
        loadChildren: () => import('../view-person/view-person.module').then( m => m.ViewPersonPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
