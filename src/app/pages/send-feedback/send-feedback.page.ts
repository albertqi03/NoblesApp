import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ExecFileOptionsWithStringEncoding } from 'child_process';

@Component({
  selector: 'app-send-feedback',
  templateUrl: './send-feedback.page.html',
  styleUrls: ['./send-feedback.page.scss'],
})
export class SendFeedbackPage implements OnInit {

  feedbackName: string;
  feedbackEmail: string;
  feedbackSubject: string;
  feedbackType: string;
  feedbackDevice: string;
  feedbackComments: string;

  constructor(private nav: NavController, private toastController: ToastController) {
    this.feedbackName = '';
    this.feedbackEmail = '';
    this.feedbackSubject = '';
    this.feedbackType = '';
    this.feedbackDevice = '';
    this.feedbackComments = '';
  }

  ngOnInit() {
  }

  async toastFailure() {
    const toast = await this.toastController.create({
      message: 'Please fill in all inputs.',
      duration: 1500
    });
    toast.present();
  }

  async toastSuccess() {
    const toast = await this.toastController.create({
      message: 'Thank you for your feedback!',
      duration: 2000
    });
    toast.present();
  }

  submitFeedback() {
    if (this.feedbackName == '' || this.feedbackEmail == '' || this.feedbackSubject == '' ||
      this.feedbackType == '' || this.feedbackDevice == '' || this.feedbackComments == '') {
      this.toastFailure();
      return;
    }

    // do other stuff blah blah blah

    this.toastSuccess();
    this.nav.navigateBack('/menu/settings');
  }

}
