import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReservarPage } from 'src/app/pages/reservar/reservar.page';

@Component({
  selector: 'app-alojamiento',
  templateUrl: './alojamiento.component.html',
  styleUrls: ['./alojamiento.component.scss'],
})

export class AlojamientoComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  async reservar() {

    const modal = await this.modalCtrl.create({
      component: ReservarPage,
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);

  }

}
