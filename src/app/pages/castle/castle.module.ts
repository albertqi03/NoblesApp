import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastlePageRoutingModule } from './castle-routing.module';

import { CastlePage } from './castle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastlePageRoutingModule
  ],
  declarations: [CastlePage]
})
export class CastlePageModule {}
