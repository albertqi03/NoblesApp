import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendFeedbackPageRoutingModule } from './send-feedback-routing.module';

import { SendFeedbackPage } from './send-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendFeedbackPageRoutingModule
  ],
  declarations: [SendFeedbackPage]
})
export class SendFeedbackPageModule {}
