import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeaderTabsComponent } from './header-tabs/header-tabs.component';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { AlojamientoComponent } from './alojamiento/alojamiento.component';



@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    HeaderTabsComponent,
    AlojamientosComponent,
    AlojamientoComponent
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    HeaderTabsComponent,
    AlojamientosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
