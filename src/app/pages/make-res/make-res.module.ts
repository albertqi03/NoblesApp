import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeResPageRoutingModule } from './make-res-routing.module';

import { MakeResPage } from './make-res.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeResPageRoutingModule
  ],
  declarations: [MakeResPage]
})
export class MakeResPageModule {}
