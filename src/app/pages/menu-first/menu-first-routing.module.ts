import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuFirstPage } from './menu-first.page';

const routes: Routes = [
  {
    path: '',
    component: MenuFirstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuFirstPageRoutingModule {}
