import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmLogoutPageRoutingModule } from './confirm-logout-routing.module';

import { ConfirmLogoutPage } from './confirm-logout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmLogoutPageRoutingModule
  ],
  declarations: [ConfirmLogoutPage]
})
export class ConfirmLogoutPageModule {}
