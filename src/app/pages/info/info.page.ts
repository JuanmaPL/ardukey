import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

const mensaje: string = '3º de Desarrollo de Aplicaciones Multiplataforma';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})

export class InfoPage implements OnInit {

  constructor(private alert: AlertService) { }


  ngOnInit() {
  }

  info() {
    this.alert.infoAlert('Acerca de...', 'ESP-Lock Opener V-1.0.0', mensaje)
  }

}