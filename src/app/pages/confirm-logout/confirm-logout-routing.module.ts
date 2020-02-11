import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmLogoutPage } from './confirm-logout.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmLogoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmLogoutPageRoutingModule {}
