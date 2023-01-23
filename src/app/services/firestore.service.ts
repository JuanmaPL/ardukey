import { Injectable } from '@angular/core';
import { AngularFirestore, fromCollectionRef } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private angularFirestore: AngularFirestore) { }
  //insertar
  public insertar(coleccion: any, datos: any) {
    return this.angularFirestore.collection(coleccion).add(datos);
  } 

  public consultar(coleccion:any) {
    return this.angularFirestore.collection(coleccion).snapshotChanges();
  }

  public borrar(coleccion: string, documentId: string ) {
    return this.angularFirestore.collection(coleccion).doc(documentId).delete();
  }

  public actualizar(coleccion: string, documentId: string, datos: any) {
    return this.angularFirestore.collection(coleccion).doc(documentId).set(datos);
   }

   public consultarPorId(coleccion: string, documentId: string) {
    return this.angularFirestore.collection(coleccion).doc(documentId).snapshotChanges();

  }

  /**
  this.comments$ = afs.collectionGroup('Comments', ref => ref.where('user', '==', userId))
                      .valueChanges({ idField: 'docId' });
 */
  public consultarPorCampo (coleccion:string, campo: string, predicado:any) {
    console.log(coleccion ,campo,predicado);
    return this.angularFirestore.collection(coleccion, ref => ref.where(campo, '==' ,predicado)).snapshotChanges();
  }
  

}


