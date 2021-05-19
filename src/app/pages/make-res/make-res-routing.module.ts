import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeResPage } from './make-res.page';

const routes: Routes = [
  {
    path: '',
    component: MakeResPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeResPageRoutingModule {}
