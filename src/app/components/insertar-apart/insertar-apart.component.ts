import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ModalController } from '@ionic/angular';
import { ImgService } from 'src/app/services/img.service';
import { Geolocation } from '@capacitor/geolocation';
import { FormsModule } from '@angular/forms';
import { Cerradura } from 'src/app/interfaces/interfaces';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-insertar-apart',
  templateUrl: './insertar-apart.component.html',
  styleUrls: ['./insertar-apart.component.scss'],
})
export class InsertarApartComponent implements OnInit {
  //variables
  control: any;
  position: any;
  lat: any;
  lon: any;
  estado = true;
  idkey = String
  descripcion: any;
  direccion: any;
  fecha: any;
  hora: any;
  formtFecha: any;
  foto: any;
  preview: any;
  uid: any;
  //cerraduras
  coleccionCerraduras: any = [{
    id: "",
    data: {} as Cerradura
   }];

  constructor(
    private modalCtrl: ModalController,
    public img: ImgService,
    private firestoreService: FirestoreService,
  ) { this.uid = localStorage.getItem('uid'); }

  ngOnInit() {
    this.obtenerSitio();
    this.firestoreService.consultarPorCampo('cerraduras','ACTIVA',false).subscribe((resultadoConsultaCerraduras: any[]) => {
      this.coleccionCerraduras = [];
      console.log('dentro de resultadoConsulta');
      resultadoConsultaCerraduras.forEach((datosTarea: any) => {
        this.coleccionCerraduras.push({
          id: datosTarea.payload.doc.id,
          data: datosTarea.payload.doc.data()
        });
         console.log(this.coleccionCerraduras);
        
      })
    });
      
    //console.log(this.coleccionCerraduras);
    
    /**
     *   this.firestoreService.consultar("apartamentos").subscribe((resultadoConsultaTareas: any[]) => {
      this.coleccionApartamentos = [];
      console.log('dentro de resultadoConsulta');
      resultadoConsultaTareas.forEach((datosTarea: any) => {
        this.coleccionApartamentos.push({
          id: datosTarea.payload.doc.id,
          data: datosTarea.payload.doc.data()
        });
     */



   

  }
  async sacarFoto() {
    try {

      const profilePicture = await Camera.getPhoto({
        quality: 100,
        height: 400,
        width: 600,
        allowEditing: false,
        saveToGallery: true,
        resultType: CameraResultType.Base64,
      });
      this.foto = 'data:image/png;base64,' + profilePicture.base64String;
      this.preview = this.img.getImage(this.foto);
    } catch (error) {
      console.error('error en cath' + error);
    }
  }
  async obtenerSitio() {
    this.position = await Geolocation.getCurrentPosition();
    console.log('latitud: ' + this.position.coords.latitude, 'longitud: ' + this.position.coords.longitude);
    this.lat = this.position.coords.latitude;
    this.lon = this.position.coords.longitude;

  }
  obtenerKey(){}

  insertar() {
    const apartamento = {
      LAT: this.lat,
      LON: this.lon,
      DESCRIPCION: this.descripcion,
      DIRECCION: this.direccion,
      ESTADO: this.estado,
      IDKEY: this.idkey,
      IMG: this.foto,

    };
    //console.log(sitio);
    /*this.dbf.database.ref('list/'+this.uid).push(sitio).then((res)=>{
      this.cerrarModal();
      console.log('se ha introducido correctamente en la bd');
      this.alert.registerAlert('Anuncio', ' se ha introducido correctamente en la bd ');

    }, (err) => {  console.log('error al meter en la bd ' + err);
    this.alert.registerAlert('¡Error!', ' error al guardar en la bd ');
  });*/
  }

  cerrar() { this.modalCtrl.dismiss(); }

  actualizar() { }





}
