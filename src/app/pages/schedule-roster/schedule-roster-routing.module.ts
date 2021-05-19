import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleRosterPage } from './schedule-roster.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleRosterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleRosterPageRoutingModule {}
