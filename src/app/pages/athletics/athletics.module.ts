import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AthleticsPageRoutingModule } from './athletics-routing.module';

import { AthleticsPage } from './athletics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthleticsPageRoutingModule
  ],
  declarations: [AthleticsPage]
})
export class AthleticsPageModule {}
