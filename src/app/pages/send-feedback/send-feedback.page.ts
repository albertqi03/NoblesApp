import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

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

  failureToast: any;
  successToast: any;

  constructor(private nav: NavController, private toastController: ToastController, private emailComposer: EmailComposer) {
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
    try {
      this.failureToast.dismiss();
    } catch (e) { }

    this.failureToast = await this.toastController.create({
      message: 'Please fill in all inputs.',
      duration: 1500
    });
    this.failureToast.present();
  }

  async toastSuccess() {
    try {
      this.successToast.dismiss();
    } catch (e) { }

    this.successToast = await this.toastController.create({
      message: 'Thank you for your feedback!',
      duration: 2000
    });
    this.successToast.present();
  }

  submitFeedback() {
    if (this.feedbackName == '' || this.feedbackEmail == '' || this.feedbackSubject == '' ||
      this.feedbackType == '' || this.feedbackDevice == '' || this.feedbackComments == '') {
      this.toastFailure();
      return;
    }

    let email = {
      to: 'noblesappteam@gmail.com',
      subject: this.feedbackSubject,
      body: 'From: ' + this.feedbackName +
            '\nEmail: ' + this.feedbackEmail +
            '\n\nFeedback Type: ' + this.feedbackType +
            '\nDevice Model: ' + this.feedbackDevice +
            '\n\nComments: ' + this.feedbackComments,
      isHtml: true
    }
    this.emailComposer.open(email);

    this.toastSuccess();
    this.nav.navigateBack('/menu/settings');
  }

}
