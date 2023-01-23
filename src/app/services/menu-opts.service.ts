import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { menuOpts } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class MenuOptsService {

  constructor(private http: HttpClient) { }

  getMenuOptions() {
    return this.http.get<menuOpts[]>('/assets/data/menu.json');
  }

}
