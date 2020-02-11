import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuSecondPage } from './menu-second.page';

const routes: Routes = [
  {
    path: '',
    component: MenuSecondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuSecondPageRoutingModule {}
