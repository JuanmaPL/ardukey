import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Reserva } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ScReservasService {

  constructor(private firestore: AngularFirestore) { }

  addReserva(reserva: Reserva) {
    return this.firestore.collection('tasks').add(reserva);
  }

  getReservas() {

  }

  editReserva(id: string, reserva: Reserva) {

  }

  deleteReserva(reserva: Reserva) {

  }
  
}

