import { Component, OnInit } from '@angular/core';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { ModalController } from '@ionic/angular';
import { Alquiler, Apartamento, Cerradura, Usuario } from 'src/app/interfaces/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.scss'],
})
export class AlojamientosComponent implements OnInit {
 /**
  * BLE
  */
 UART_SERVICE = '6E400001-B5A3-F393-E0A9-E50E24DCCA9E';
 UART_TX = '6E400002-B5A3-F393-E0A9-E50E24DCCA9E';
 UART_RX ='6E400003-B5A3-F393-E0A9-E50E24DCCA9E';
 /**
  * *************************************
  */
 
  //variables
  coleccionAlquileres: any = [{
    id: "",
    data: {} as Alquiler,
  }];

  coleccionApartamentos: any = [{
    id: "",
    data: {} as Apartamento,
  }];

  coleccionCerraduras: any = [{
    id: "",
    data: {} as Cerradura,
  }];

  control = true;
  texto = '';
  nombreApartamento: string
  idKey = ''
  key = ''
  fechasOcupadas1!: string[];
  fechasOcupadas2!: string[];
  fechaActual = new Date().toDateString();
  idPropiedad: string
  preview: any;

  constructor(
    private firestoreService: FirestoreService,
    private modalCtrl: ModalController,
    private ble:BLE,
    private alert:AlertService,
  ) {
    this.coleccionAlquileres = []
    this.idPropiedad = '';
    this.nombreApartamento = ''
  }

  ngOnInit() {
    this.alquileres();
    this.idPropiedad = localStorage.getItem('idPropiedad')!
    this.apartamento();


  }

  ionViewWillEnter() {
    this.fechas();
    this.comprobarFechas();

  }

  ionViewWillLeave() { }

  comprobarFechas() {

    for (let i = 0; i < this.fechasOcupadas1.length; i++) {
      const date1 = new Date(this.fechasOcupadas1[i])
      const date2 = new Date(this.fechaActual)
      console.log('date1 ' + date1 + ' date2 ' + date2)
      if (date1.getTime() == date2.getTime()) {
        console.log('dentro del if')
        this.control = false;
      }
    }
  }


  alquileres() {
    console.log('uid usuario' + localStorage.getItem('uid'))
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
      const filtro = this.coleccionAlquileres.filter((element: { data: { UID: string; F_INICIO: any; }; }) => {
        return element.data.UID === localStorage.getItem('uid');
      });
      const fechasOcupadas = filtro.map((element: { data: { F_INICIO: any; }; }) => element.data.F_INICIO);
      localStorage.setItem('fecha', fechasOcupadas.toString());
      const idPropiedad = filtro.map((element: { data: { IDPROP: string; }; }) => element.data.IDPROP);
      localStorage.setItem('idPropiedad', idPropiedad.toString());
      //this.idPropiedad=idPropiedad.toString();

      // console.log('fechas Apartamentos Ocupar '+this.texto)

    });
  }
  /**
   * 
   */
  apartamento() {
    console.log('apartamento' + this.idPropiedad);
    this.firestoreService.consultarPorId('apartamentos', this.idPropiedad).subscribe((resultado) => {
      if (resultado.exists) {
        this.coleccionApartamentos.id = resultado.id
        this.coleccionApartamentos.data = resultado.data();
        this.nombreApartamento = this.coleccionApartamentos.data.DESCRIPCION;
        this.idKey = this.coleccionApartamentos.data.IDKEY;

        console.log('apartamento nombre e Idkey ' + this.nombreApartamento + ' ' + this.idKey)

      } else {
        // No se ha encontrado un document con ese ID. Vaciar los datos que hubiera
        this.coleccionApartamentos.data = {} as Apartamento;
      }
    });
  }
  /**
   * 
   */
  cerradura() {
    console.log('apartamento' + this.idPropiedad);
    this.firestoreService.consultarPorId('cerraduras', this.idKey).subscribe((resultado) => {
      if (resultado.exists) {
        this.coleccionCerraduras.id = resultado.id
        this.coleccionCerraduras.data = resultado.data();
        this.key = this.coleccionCerraduras.data.CODIGO;

        console.log('cerradura key ' + this.key)

      } else {
        // No se ha encontrado un document con ese ID. Vaciar los datos que hubiera
        this.coleccionCerraduras.data = {} as Cerradura;
      }
    });
  }
  /**
   * 
   */
  fechas() {
    this.texto = localStorage.getItem('fecha')!;
    //console.log('fechasTexto '+this.texto);
    this.fechasOcupadas1 = this.texto.split(',');
    this.fechasOcupadas1.sort();
    const date = new Date()
    this.fechasOcupadas2 = [];
    for (let i = 0; i < this.fechasOcupadas1.length; i++) {
      const date1 = new Date(this.fechasOcupadas1[i]);
      if (date <= date1) {
        this.fechasOcupadas2.push(this.fechasOcupadas1[i])
      }
    }
    this.fechasOcupadas2.sort();
    console.log('fechasOcupadas2 ' + this.fechasOcupadas2);
    localStorage.setItem('fecha', '');
  }

  /* obtenerListaUsuarios(){
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
   }*/

  llave() {

    console.log('uid usuario' + localStorage.getItem('uid'))
    this.cerradura();

    console.log('cerradura ' + this.key);
    if(this.key != ''){
      console.log('llama  a apertura '+this.key)
      this.apertura(this.key);
    }


  }
  
  /**
   * 
   */
  cerrar() { this.modalCtrl.dismiss(); }
  /**
   * Apertura por bluetooth
   */
  /**
   * 
   * conversión de string a charCode par poder enviar los caráteres
   */
  stringToBytes(str: string) {
    const data = new Uint8Array(str.length);
    for (let i = 0; i < str.length; i++) {
      data[i] = str.charCodeAt(i);
    }
    return data.buffer;
  }
  /**
   * Apertura
   */
  async apertura(key:string) {
    const direccion ='78:E3:6D:11:B1:CA';
    await this.ble.isEnabled().then(
      ()=>{
        this.ble.connect(direccion).subscribe({next: () => {/*this.messageFunction('Conectado');*/
        this.ble.write(direccion, this.UART_SERVICE, this.UART_TX, this.stringToBytes(key) );
       // setTimeout(()=>{},2000);//RETARDO 
        //this.ble.write(direccion, this.UART_SERVICE, this.UART_TX, this.stringToBytes('apagar') );
          },
        error: () => {this.alert.registerAlert('Alerta','error al conectar')}});
        this.ble.disconnect(direccion).catch(() => {this.alert.registerAlert('Alerta','problemas al desconectar')});

      }).
      catch(() =>{
        this.alert.registerAlert('Alerta','Bluetooth apagado; actívelo')
    });
    
        //setTimeout(()=>{},10);
       
        //setTimeout(()=>{},10);
        //this.ble.disconnect(direccion).catch(() => {this.messageFunction('problemas al desconectar')}); 
        //setTimeout(()=>{},1000);//RETARDO 
       // this.ble.connect(direccion).subscribe({next: () => {},
       // error: (data) => {this.messageFunction('error al conectar')}});
        //this.ble.write(direccion, this.UART_SERVICE, this.UART_TX, this.stringToBytes('apagar') );
        

  }

}
