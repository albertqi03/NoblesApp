import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPersonPage } from './view-person.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPersonPageRoutingModule {}
