import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastlePage } from './castle.page';

const routes: Routes = [
  {
    path: '',
    component: CastlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastlePageRoutingModule { }
