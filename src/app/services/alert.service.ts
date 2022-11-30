import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertCtrl: AlertController) { }

  async InputValidationAlert(input:any, callback:any) {
    const ventana = await this.alertCtrl.create({
      header: 'Confirmation',
      message: `Enter ${input} to confirm delete action.`,
      inputs: [
        {
          name: 'alert_input',
          placeholder: `${input}`,
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Confrim',
          handler: (alert_data)=> {
            let alert_input = alert_data.alert_input;
            if(alert_input === input){
              callback(true);
            }
            else{ 
              callback(false);
            }
          }
        }
      ]
    });
    ventana.present();
  }

  async SuccessfulAlert() {
    const ventana = await this.alertCtrl.create({
      header: 'Success',
      message: 'Transaction processed successfully.',
      buttons: [
        {
          text: 'OK',
        },
      ],
    });
    ventana.present();
  }

  async internalErrorAlert() {
    const ventana = await this.alertCtrl.create({
      header: 'Internal Server Failure',
      message: 'Please contact Linx/AS: support@linxas.co.za.',
      buttons: [
        {
          text: 'OK',
        },
      ],
    });
    ventana.present();
  }

  async badRequestAlert() {
    const ventana = await this.alertCtrl.create({
      header: 'Bad Request',
      message: 'Incorrect Request Sent.',
      buttons: [
        {
          text: 'OK',
        },
      ],
    });
    ventana.present();
  }
}
