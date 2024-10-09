import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  goToMeditation() {
    this.navCtrl.navigateForward('/sesiones');
  }

  goToProfile() {
    this.navCtrl.navigateForward('/perfil');
  }

}
