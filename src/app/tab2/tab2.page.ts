import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
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
  classification: string = '2.4% annual risk of VTE recurrence. Consider discontinuing anticoagulation.';

  checks() {
    this.score = 0;
    if (this.criteria1 == true){
      this.score = this.score + 2;
    }
    if (this.criteria2 == true){
      this.score = this.score + 1;
    }
    if (this.criteria3 == true){
      this.score = this.score + 1;
    }
    if (this.criteria4 == true){
      this.score = this.score - 2;
    }
    if (this.score == -2){
      this.classification = '1.8% annual risk of VTE recurrence. Consider discontinuing anticoagulation.';
    } else if (this.score == -1){
      this.classification = '1.0% annual risk of VTE recurrence. Consider discontinuing anticoagulation.';
    } else if (this.score == 0) {
      this.classification = '2.4% annual risk of VTE recurrence. Consider discontinuing anticoagulation.';
    } else if (this.score == 1){
      this.classification = '3.9% annual risk of VTE recurrence. Consider discontinuing anticoagulation.';
    } else if (this.score == 2){
      this.classification = '6.3% annual risk of VTE recurrence. Consider continuing anticoagulation.';
    } else if (this.score == 3){
      this.classification = '10.8% annual risk of VTE recurrence. Consider continuing anticoagulation.';
    } else if (this.score == 4){
      this.classification = '19.9% annual risk of VTE recurrence. Consider continuing anticoagulation.';
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
