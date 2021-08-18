import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/response.interface';
import { Sistema } from '../interfaces/sistema.interface';
import { Requerimiento } from '../interfaces/requerimiento.interface';
import { Estadistica } from '../interfaces/estadistica.interface';
import { Publicacion } from '../interfaces/publicacion.interface';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {
  
  constructor(private http: HttpClient) { }
  
  getSistemas(): Observable<Sistema[]> {
    return this.http.get<Sistema[]>(`${environment.apiURL}sistema/getSistemas`)
    .pipe(map((response) => response['Data']));    
  }

  getRequerimientos(prmId: number): Observable<Requerimiento[]> {    
    return this.http.get<Requerimiento[]>(`${environment.apiURL}sistema/getRequerimientos/${prmId}`)
    .pipe(map((response) => response['Data']));    
  }

  getEstadisticas(): Observable<Estadistica> {    
    return this.http.get<Estadistica>(`${environment.apiURL}sistema/getEstadisticas`)
    .pipe(map((response) => response['Data']));    
  }

   
  getPublicaciones(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(`${environment.apiURL}sistema/getPublicaciones`)
    .pipe(map((response) => response['Data']));    
  }

  setsistema(sistema: Sistema): Observable<Response>{
    return this.http.post<Response>(`${environment.apiURL}sistema/setSistema`, sistema);
  }
}
