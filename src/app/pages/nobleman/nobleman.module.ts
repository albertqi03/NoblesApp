import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoblemanPageRoutingModule } from './nobleman-routing.module';

import { NoblemanPage } from './nobleman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoblemanPageRoutingModule
  ],
  declarations: [NoblemanPage]
})
export class NoblemanPageModule {}
