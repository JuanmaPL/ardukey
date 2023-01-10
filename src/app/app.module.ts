import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';





import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { ReservarPage } from './pages/reservar/reservar.page';

import { ScApartamentosService } from './services/sc-apartamentos.service';





@NgModule({
  //Al usar la página de reservar en el calendario en un Modal tenemos que declararlo
  declarations: [AppComponent, ReservarPage],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ScApartamentosService],
  bootstrap: [AppComponent],
})
export class AppModule { }
