import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Alquiler } from 'src/app/interfaces/interfaces';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-anular-reserva',
  templateUrl: './anular-reserva.component.html',
  styleUrls: ['./anular-reserva.component.scss'],
})
export class AnularReservaComponent implements OnInit {

  uid = '';
  idApartamento = '';
  coleccionAlquileres: any = [{
    id: "",
    data: {} as Alquiler,
  }];

  constructor(
    private modalCtrl: ModalController,
    private firestoreService: FirestoreService,
  ) { }

  ngOnInit() {
    this.alquileres()
  }


  cerrar(){this.modalCtrl.dismiss();}

  alquileres(){
    this.firestoreService.consultar('alquileres').subscribe((consulta: any[]) => {
      this.coleccionAlquileres = [];
      console.log('dentro de resultadoConsulta');
      consulta.forEach((datos: any) => {
        this.coleccionAlquileres.push({
          id: datos.payload.doc.id,
          data: datos.payload.doc.data()
        });
        // console.log('fechas1'+this.coleccionAlquileres);

      });
      const filtro = this.coleccionAlquileres.filter((element: { data: { IDPROP: string; F_INICIO: any; UID:string }},id: {id:string} ) => {
        return element.data.IDPROP === this.idApartamento  && element.data.UID == this.uid;
      });
      const fechasOcupadas = filtro.map((element: { data: { F_INICIO: any; } ,id:{id:string}}) => {
        element.data.F_INICIO;
        element.id
      });
        console.log('fechas ocupadas anular : '+fechasOcupadas)
      //this.texto = fechasOcupadas.toString();
      //console.log('string textoOcupadas ' + this.texto)
    });

  }

}
