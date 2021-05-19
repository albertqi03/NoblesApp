import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoblemanPage } from './nobleman.page';

const routes: Routes = [
  {
    path: '',
    component: NoblemanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoblemanPageRoutingModule {}
