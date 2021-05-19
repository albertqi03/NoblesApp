import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPersonSchedulePage } from './view-person-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPersonSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPersonSchedulePageRoutingModule {}
