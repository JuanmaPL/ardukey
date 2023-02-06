import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertCtrl: AlertController) { }

  async registerAlert(status: string,sms: string) {
    const alert = await this.alertCtrl.create({
      header: status,
      subHeader: sms,
      buttons: ['Listo']
    });

    await alert.present();
  }
}
