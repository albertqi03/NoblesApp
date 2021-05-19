import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfternoonProgramPage } from './afternoon-program.page';

const routes: Routes = [
  {
    path: '',
    component: AfternoonProgramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfternoonProgramPageRoutingModule {}
