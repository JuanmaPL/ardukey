import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Apartamento, Usuario } from 'src/app/interfaces/interfaces';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ReservarComponent } from '../reservar/reservar.component';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.scss'],
})
export class AlojamientosComponent implements OnInit {
  //variables
  coleccionApartamentos: any = [{
    id: "",
    data: {} as Apartamento
   }]; 
   coleccionUsuarios: any = [{
    id: "",
    data: {} as Usuario
  }];


  preview: any;

  constructor(
    private firestoreService: FirestoreService,
    private modalCtrl: ModalController,
    ) {
      this.coleccionUsuarios = []
     }

  ngOnInit() {
   
  } 

 

  obtenerListaUsuarios(){
    console.log('dentro de obtener Lista  '+localStorage.getItem('uid'));
    this.firestoreService.consultar("usuarios").subscribe((consulta: any[]) => {
      this.coleccionUsuarios = [];
      console.log('dentro de resultadoConsulta');
      consulta.forEach((datosTarea: any) => {
        this.coleccionUsuarios.push({
          id: datosTarea.payload.doc.id,
          data: datosTarea.payload.doc.data()
        });
         //console.log(this.coleccionUsuarios);
        
      })
     
      this.coleccionUsuarios.forEach((element: any) => {
        if (element.data.UID === localStorage.getItem('uid')) {localStorage.setItem('rol',element.data.ROL)}                     
      });

     // console.log('Rol Usuario es '+localStorage.getItem('rol'))
    
    });
    console.log('Rol Usuario es '+localStorage.getItem('rol'))
  }

  async reservar() {

    const modal = await this.modalCtrl.create({
      component: ReservarComponent,
    });
    modal.present();
  }

  cerrar(){this.modalCtrl.dismiss();}

}
