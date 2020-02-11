import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuSecondPageRoutingModule } from './menu-second-routing.module';

import { MenuSecondPage } from './menu-second.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuSecondPageRoutingModule
  ],
  declarations: [MenuSecondPage]
})
export class MenuSecondPageModule {}
