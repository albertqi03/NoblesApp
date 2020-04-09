import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendFeedbackPage } from './send-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: SendFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendFeedbackPageRoutingModule {}
