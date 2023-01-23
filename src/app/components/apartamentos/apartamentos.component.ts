import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Apartamento } from 'src/app/interfaces/interfaces';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InsertarApartComponent } from '../insertar-apart/insertar-apart.component';

@Component({
  selector: 'app-apartamentos',
  templateUrl: './apartamentos.component.html',
  styleUrls: ['./apartamentos.component.scss'],
})
export class ApartamentosComponent implements OnInit {


  coleccionApartamentos: any = [{
    id: "",
    data: {} as Apartamento
   }];

  apartamento: Apartamento;

  constructor(private modalCtrl: ModalController, private firestoreService: FirestoreService) { 
    this.apartamento = {} as Apartamento;
  }

  ngOnInit() {
    this.obtenerListaApartamentos();
  }

  cerrar(){this.modalCtrl.dismiss();}

  obtenerListaApartamentos(){
    console.log('dentro de obtener Lista');
    this.firestoreService.consultar("apartamentos").subscribe((resultadoConsultaTareas: any[]) => {
      this.coleccionApartamentos = [];
      console.log('dentro de resultadoConsulta');
      resultadoConsultaTareas.forEach((datosTarea: any) => {
        this.coleccionApartamentos.push({
          id: datosTarea.payload.doc.id,
          data: datosTarea.payload.doc.data()
        });
         console.log(this.coleccionApartamentos);
        
      })
    });
  }
  ///Insertar o actualizar un nuevo apartamento
  async insertar() {

    const modal = await this.modalCtrl.create({
      component: InsertarApartComponent,
      componentProps: { control: true}
    });
    await modal.present();

  }
  async actualizar(id: string) {

    const modal = await this.modalCtrl.create({
      component: InsertarApartComponent
    });
    await modal.present();

  }
  borrar(id: string){

  }

}
