import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirListPageRoutingModule } from './dir-list-routing.module';

import { DirListPage } from './dir-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirListPageRoutingModule
  ],
  declarations: [DirListPage]
})
export class DirListPageModule {}
