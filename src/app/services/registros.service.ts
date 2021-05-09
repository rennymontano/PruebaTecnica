import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  constructor( private http: HttpClient ) { }

  getListProgramas(): Observable<any>{
    return this.http.get('https://cms.qailumno.com/servicios/programas');
  }

  setRegistro(params: any): Observable<any> {
    const param = {
      name: params.nombre,
      family_name: params.apellido,
      email: params.email,
      phone: params.telefono,
      program: params.selectorPrograma,
      comment: params.comentario
    }

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')
    const opciones = {
      headers: headers
    }

    return this.http.post('https://cms.qailumno.com/servicios/registro', param, opciones);
  }

}
