import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyResPageRoutingModule } from './my-res-routing.module';

import { MyResPage } from './my-res.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyResPageRoutingModule
  ],
  declarations: [MyResPage]
})
export class MyResPageModule {}
