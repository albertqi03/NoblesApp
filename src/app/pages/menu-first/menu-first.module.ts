import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuFirstPageRoutingModule } from './menu-first-routing.module';

import { MenuFirstPage } from './menu-first.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuFirstPageRoutingModule
  ],
  declarations: [MenuFirstPage]
})
export class MenuFirstPageModule {}
