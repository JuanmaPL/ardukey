import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

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
            AngularFireModule.initializeApp(environment.firebase),
            AngularFireAuthModule,
            AngularFireStorageModule,
            AngularFireDatabaseModule,
            ScApartamentosService],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, ScApartamentosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
