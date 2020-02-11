import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { ConfirmLogoutPageModule } from '../confirm-logout/confirm-logout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    ConfirmLogoutPageModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
