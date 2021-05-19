import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfternoonProgramPageRoutingModule } from './afternoon-program-routing.module';

import { AfternoonProgramPage } from './afternoon-program.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfternoonProgramPageRoutingModule
  ],
  declarations: [AfternoonProgramPage]
})
export class AfternoonProgramPageModule {}
