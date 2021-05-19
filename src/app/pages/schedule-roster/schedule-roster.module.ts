import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleRosterPageRoutingModule } from './schedule-roster-routing.module';

import { ScheduleRosterPage } from './schedule-roster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleRosterPageRoutingModule
  ],
  declarations: [ScheduleRosterPage]
})
export class ScheduleRosterPageModule {}
