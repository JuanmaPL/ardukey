import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeaderTabsComponent } from './header-tabs/header-tabs.component';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { AlojamientoComponent } from './alojamiento/alojamiento.component';
import { ApartamentosComponent } from './apartamentos/apartamentos.component';
import { InsertarApartComponent } from './insertar-apart/insertar-apart.component';
import { FormsModule } from '@angular/forms';
import { CerradurasComponent } from './cerraduras/cerraduras.component';
import { InsertarCerradComponent } from './insertar-cerrad/insertar-cerrad.component';



@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    HeaderTabsComponent,
    AlojamientosComponent,
    AlojamientoComponent,
    ApartamentosComponent,
    InsertarApartComponent,
    CerradurasComponent,
    InsertarCerradComponent,
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
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
  ]
})
export class ComponentsModule { }
