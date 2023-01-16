
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
function collection(firestore: any, arg1: string): any {
  throw new Error('Function not implemented.');
}

