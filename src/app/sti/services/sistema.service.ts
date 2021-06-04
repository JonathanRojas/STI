import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/response.interface';
import { Sistema } from '../interfaces/sistema.interface';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {
  
  constructor(private http: HttpClient) { }
  
  getSistemas(): Observable<Sistema[]> {
    return this.http.get<Sistema[]>(`${environment.apiURL}sistema/getSistemas`)
    .pipe(map((data) => data['Data']
    ));    
  }

  setsistema(sistema: Sistema): Observable<Response>{
    return this.http.post<Response>(`${environment.apiURL}sistema/setSistema`, sistema);
  }
}
