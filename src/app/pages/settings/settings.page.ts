import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApartamentosComponent } from 'src/app/components/apartamentos/apartamentos.component';
import { CerradurasComponent } from 'src/app/components/cerraduras/cerraduras.component';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async apartamentos(){
    const modal = await this.modalCtrl.create({
      component: ApartamentosComponent
    });
    await modal.present();
    console.log('presenta apartamento')
  }

  async cerraduras(){

    const modal = await this.modalCtrl.create({
      component: CerradurasComponent
    });
    await modal.present();
    console.log('presenta cerraduras')

  }
  /*async reservar() {

    const modal = await this.modalCtrl.create({
      component: ReservarPage,
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);

  }*/

}
