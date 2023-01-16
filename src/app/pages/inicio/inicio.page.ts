import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScApartamentosService } from 'src/app/services/sc-apartamentos.service';
import { Apartamento } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

 
  constructor(private scApartamentos: ScApartamentosService) { }

  ngOnInit() {

  
   
    
  }

}
