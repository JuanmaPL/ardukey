import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { ReservarPage } from './pages/reservar/reservar.page';

import{AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirestoreService } from './services/firestore.service';
import { FormsModule } from '@angular/forms';





@NgModule({
  //Al usar la página de reservar en el calendario en un Modal tenemos que declararlo
  declarations: [AppComponent, ReservarPage],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, FirestoreService],
  bootstrap: [AppComponent],
})
export class AppModule { }
