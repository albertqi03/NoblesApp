import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirListPage } from './dir-list.page';

const routes: Routes = [
  {
    path: '',
    component: DirListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirListPageRoutingModule {}
