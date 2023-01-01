import { Component, OnInit } from '@angular/core';
import { ScApartamentosService } from 'src/app/services/sc-apartamentos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private scApartamentos: ScApartamentosService) { }

  ngOnInit() {

    this.scApartamentos.getApartamentos();
  }

}
