
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Apartamento } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ScApartamentosService {

   constructor(private firestore: AngularFirestore) {
  }

   getApartamentos() {
     return this.firestore.collection('apartamentos').snapshotChanges();
   }

  


  addApartamento() {

  }


  deleteApartamento() {


  }


  editApartamento() {


  }


}

