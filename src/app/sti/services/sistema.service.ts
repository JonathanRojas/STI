import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
import { Sistema } from '../interfaces/sistema.interface';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  private apiUrl: string ='https://localhost:44373/sistema'; //name/chile

  constructor(private http: HttpClient) { }
  
  getSistemas(): Observable<Sistema[]> {
    return this.http.get<Sistema[]>(`${this.apiUrl}/getSistemas`)
    .pipe(map((data) => data['Data']
    ));    
  }

  setsistema(sistema: Sistema): Observable<Sistema>{
    return this.http.post<Sistema>(`${this.apiUrl}/setSistema`, sistema);
  }
}
