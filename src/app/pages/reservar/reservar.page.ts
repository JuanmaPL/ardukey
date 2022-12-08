import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {

  fecha: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  cambios(event: any){
    console.log(event);
  }

}
