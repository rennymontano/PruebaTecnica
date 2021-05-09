import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  getListNoticias(): Observable<any>{
    return this.http.get('https://cms.qailumno.com/servicios/noticias');
  }

}
