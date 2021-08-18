import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/internal/operators/map";
import { environment } from "src/environments/environment";
import { Tipo } from "../interfaces/tipo.interface";

@Injectable({
  providedIn: "root",
})
export class TipoService {  
  constructor(private http: HttpClient) {}

  getTipoSistemas(): Observable<Tipo[]> {
    return this.http
      .get<Tipo[]>(`${environment.apiURL}tipo/TipoSistemaGetItems`)
      .pipe(map((data) => data["Data"]));
  }  

  getTipoEscritorioVirtual(): Observable<Tipo[]> {
    return this.http
      .get<Tipo[]>(`${environment.apiURL}tipo/TipoEscritorioVirtualGetItems`)
      .pipe(map((data) => data["Data"]));
  }  

  getTipoBaseDatos(): Observable<Tipo[]> {
    return this.http
      .get<Tipo[]>(`${environment.apiURL}tipo/TipoBaseDatosGetItems`)
      .pipe(map((data) => data["Data"]));
  }  

  getTipoEstadoDesarrollo(): Observable<Tipo[]> {
    return this.http
      .get<Tipo[]>(`${environment.apiURL}tipo/TipoEstadoDesarrolloGetItems`)
      .pipe(map((data) => data["Data"]));
  }  

  getTipoUsuario(): Observable<Tipo[]> {
    return this.http
      .get<Tipo[]>(`${environment.apiURL}tipo/TipoUsuarioGetItems`)
      .pipe(map((data) => data["Data"]));
  }  

  getTipoIIS(): Observable<Tipo[]> {
    return this.http
      .get<Tipo[]>(`${environment.apiURL}tipo/TipoIISGetItems`)
      .pipe(map((data) => data["Data"]));
  }  

  getTipoFrameworkWeb(): Observable<Tipo[]> {
    return this.http
      .get<Tipo[]>(`${environment.apiURL}tipo/TipoFrameworkWebGetItems`)
      .pipe(map((data) => data["Data"]));
  }  

  getTipoFrameworkNet(): Observable<Tipo[]> {
    return this.http
      .get<Tipo[]>(`${environment.apiURL}tipo/TipoFrameworkNetGetItems`)
      .pipe(map((data) => data["Data"]));
  }  
}
