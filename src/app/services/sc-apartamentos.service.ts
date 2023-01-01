import { Apartamento } from '../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScApartamentosService {

  private apartamentos: AngularFireList<Apartamento>;

  constructor(private database: AngularFireDatabase) {

    this.apartamentos = this.database.list('/apartamentos', (ref) =>
      ref.orderByChild('ID')
    );

  }

  getApartamentos(): Observable<Apartamento[]> {
    return this.apartamentos.snapshotChanges().pipe(

      map((changes: any) => {
        return changes.map((c: any) => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }));
      })
    );

    console.log(this.apartamentos);
  }

 
  addApartamento(apartamento: Apartamento) {
    
    return this.apartamentos.push(apartamento);
  }

  
  deleteApartamento(id: number) {
    
    this.database.list('/apartamentos').remove('ID');
  }

 
  editApartamento(apartamento:any) {
   
    const $key = apartamento.$key;
    delete apartamento.$key;
    this.database.list('/apartamentos').update($key, apartamento);
  }

 
}
