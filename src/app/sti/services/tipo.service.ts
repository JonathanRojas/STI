import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/internal/operators/map";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Response } from "../interfaces/response.interface";
import { Sistema } from "../interfaces/sistema.interface";

@Injectable({
  providedIn: "root",
})
export class TipoService {  
  constructor(private http: HttpClient) {}

  getTipoSistemas(): Observable<Sistema[]> {
    return this.http
      .get<Sistema[]>(`${environment.apiURL}tipo/TipoSistemaGetItems`)
      .pipe(map((data) => data["Data"]));
  }  

  getTipoEscritorioVirtual(): Observable<Sistema[]> {
    return this.http
      .get<Sistema[]>(`${environment.apiURL}tipo/TipoEscritorioVirtualGetItems`)
      .pipe(map((data) => data["Data"]));
  }  

  getTipoBaseDatos(): Observable<Sistema[]> {
    return this.http
      .get<Sistema[]>(`${environment.apiURL}tipo/TipoBaseDatosGetItems`)
      .pipe(map((data) => data["Data"]));
  }  

  getTipoEstadoDesarrollo(): Observable<Sistema[]> {
    return this.http
      .get<Sistema[]>(`${environment.apiURL}tipo/TipoEstadoDesarrolloGetItems`)
      .pipe(map((data) => data["Data"]));
  }  

  getTipoUsuario(): Observable<Sistema[]> {
    return this.http
      .get<Sistema[]>(`${environment.apiURL}tipo/TipoUsuarioGetItems`)
      .pipe(map((data) => data["Data"]));
  }  

  getTipoIIS(): Observable<Sistema[]> {
    return this.http
      .get<Sistema[]>(`${environment.apiURL}tipo/TipoIISGetItems`)
      .pipe(map((data) => data["Data"]));
  }  

  getTipoFrameworkWeb(): Observable<Sistema[]> {
    return this.http
      .get<Sistema[]>(`${environment.apiURL}tipo/TipoFrameworkWebGetItems`)
      .pipe(map((data) => data["Data"]));
  }  

  getTipoFrameworkNet(): Observable<Sistema[]> {
    return this.http
      .get<Sistema[]>(`${environment.apiURL}tipo/TipoFrameworkNetGetItems`)
      .pipe(map((data) => data["Data"]));
  }  
}
