import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {

  fechaActual: Date = new Date();

  datos: string ='';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cambios(event: any) {
    console.log(event.detail.value);
  }

  //Método que cierra el modal y envía como argumentos los datos de la reserva
  reservado() {
    this.modalCtrl.dismiss({

    });
  }

  //Método que cierra el modal sin haber reservado
  cancelado() {
    this.modalCtrl.dismiss({
      cancelado: 'No se ha reservado'
    });
  }

}
