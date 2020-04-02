import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthleticsPage } from './athletics.page';

const routes: Routes = [
  {
    path: '',
    component: AthleticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthleticsPageRoutingModule {}
