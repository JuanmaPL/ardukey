import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Alquiler, Apartamento } from 'src/app/interfaces/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { FirestoreService } from 'src/app/services/firestore.service';


@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss'],
})
export class ReservarComponent implements OnInit {
  fechaActual: Date = new Date();
  apartamento: Apartamento;
  fechaLlegada: Date;
  fechaSalida: Date;
  uid: string = '';
  idApartamento: string = '';
  registrarAlquiler: Alquiler;

  constructor(
    private modalCtrl: ModalController,
    private firestoreService: FirestoreService,
    private alert: AlertService
  ) {
    this.registrarAlquiler = {} as Alquiler;
    this.fechaLlegada = new Date();
    this.fechaSalida = new Date();
    this.apartamento = {} as Apartamento
  }

  ngOnInit() {
  }

  llegada(event: any) {
    this.fechaLlegada = event.detail.value;
    //console.log(this.fechaLlegada);
  }

 
  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * Date will be enabled if it is not
     * Sunday or Saturday
     */
    return utcDay !== 0 && utcDay !== 6;
  };

  //Método que cierra el modal y envía como argumentos los datos de la reserva
  reservado() {
    if (this.fechaLlegada != null) {
      //this.alert.registerAlert('alerta', 'Fecha correcta');
      this.registrarAlquiler = { F_INICIO: this.fechaLlegada, IDPROP: this.idApartamento, UID: this.uid }

      //this.apartamentoId(this.idApartamento)
      this.firestoreService.insertar("alquileres", this.registrarAlquiler).then(() => {
        //console.log('Tarea creada correctamente!');
        //this.firestoreService.actualizar('apartamentos', this.idApartamento, this.apartamento);
        this.registrarAlquiler = {} as Alquiler;
        this.alert.registerAlert('alerta', 'Alquiler insertado');
      }, (error) => {
        this.alert.registerAlert('alerta', 'Error al insertar: ' + error);
        //console.error('Error al insertar: ' + error);
      })


      this.modalCtrl.dismiss();
    } else {
      this.alert.registerAlert('alerta', 'La fecha de salida es menor que la de entrada o algún campo es null ');
    }
  }
/**
 * 
 * método que se usa para cambiar e apartamento de no usado a usado
 */
 

  //Método que cierra el modal sin haber reservado
  cancelado() {
    this.modalCtrl.dismiss({
      cancelado: 'No se ha reservado'
    });
  }



}
