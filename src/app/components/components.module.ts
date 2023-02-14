import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeaderTabsComponent } from './header-tabs/header-tabs.component';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { ApartamentosComponent } from './apartamentos/apartamentos.component';
import { InsertarApartComponent } from './insertar-apart/insertar-apart.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CerradurasComponent } from './cerraduras/cerraduras.component';
import { InsertarCerradComponent } from './insertar-cerrad/insertar-cerrad.component';
import { MapsComponent } from './maps/maps.component';
import { RegisterComponent } from './register/register.component';
import { ReservarComponent } from './reservar/reservar.component';
import { CalendarModule } from 'ion2-calendar';
import { AnularReservaComponent } from './anular-reserva/anular-reserva.component';



@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    HeaderTabsComponent,
    AlojamientosComponent,
    ApartamentosComponent,
    InsertarApartComponent,
    CerradurasComponent,
    InsertarCerradComponent,
    MapsComponent,
    RegisterComponent,
    ReservarComponent,
    AnularReservaComponent
    

  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    HeaderTabsComponent,
    AlojamientosComponent,
    ApartamentosComponent,
    InsertarApartComponent,
    CerradurasComponent,
    InsertarCerradComponent,
    MapsComponent,
    RegisterComponent,
    ReservarComponent,
    AnularReservaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
  
  ]
})
export class ComponentsModule { }
