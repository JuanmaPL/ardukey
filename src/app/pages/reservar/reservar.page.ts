import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {

  fechaActual: Date = new Date();

  fechaLlegada: string = '';
  fechaSalida: string = '';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  llegada(event: any) {
    this.fechaLlegada = event.detail.value;
    console.log(this.fechaLlegada);
  }

  salida(event: any) {
    this.fechaSalida = event.detail.value;
    console.log(this.fechaSalida);
  }

  //Método que cierra el modal y envía como argumentos los datos de la reserva
  reservado() {
    this.modalCtrl.dismiss({
      reservado: 'Reserva realizada',
      arrive: this.fechaLlegada,
      exit: this.fechaSalida
    });
  }

  //Método que cierra el modal sin haber reservado
  cancelado() {
    this.modalCtrl.dismiss({
      cancelado: 'No se ha reservado'
    });
  }

}
