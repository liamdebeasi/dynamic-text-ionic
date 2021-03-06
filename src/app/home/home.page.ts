import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private alertCtrl: AlertController
  ) {}
  
  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'This is an alert',
      subHeader: "That's all",
      buttons: ['Close']
    });
    
    await alert.present();
  }

}
