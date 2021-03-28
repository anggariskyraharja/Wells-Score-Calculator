import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  criteria1: boolean;
  criteria2: boolean;
  criteria3: boolean;
  criteria4: boolean;
  criteria5: boolean;
  criteria6: boolean;
  criteria7: boolean;
  criteria8: boolean;
  criteria9: boolean;
  criteria10: boolean;
  score: number = 0;
  classification: string = 'Low risk group for DVT. “Unlikely” according to Wells’ DVT studies.';

  checks() {
    this.score = 0;
    if (this.criteria1 == true){
      this.score = this.score + 1;
    }
    if (this.criteria2 == true){
      this.score = this.score + 1;
    }
    if (this.criteria3 == true){
      this.score = this.score + 1;
    }
    if (this.criteria4 == true){
      this.score = this.score + 1;
    }
    if (this.criteria5 == true){
      this.score = this.score + 1;
    }
    if (this.criteria6 == true){
      this.score = this.score + 1;
    }
    if (this.criteria7 == true){
      this.score = this.score + 1;
    }
    if (this.criteria8 == true){
      this.score = this.score + 1;
    }
    if (this.criteria9 == true){
      this.score = this.score + 1;
    }
    if (this.criteria10 == true){
      this.score = this.score - 2;
    }
    if (this.score <= 0){
      this.classification = 'Low risk group for DVT. “Unlikely” according to Wells’ DVT studies.';
    } else if (this.score < 3){
      this.classification = 'Moderate risk group for DVT. High-sensitivity d-dimer testing is recommended.';
    } else {
      this.classification = 'High risk group for DVT. “Likely” according to Wells’ DVT studies. Diagnostic ultrasound and d-dimer testing are recommended.';
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Missing Value',
      message: 'Please input all the required values!',
      buttons: ['Okay']
    });
    await alert.present();
  }

  constructor(public alertController: AlertController) {
  }

}
