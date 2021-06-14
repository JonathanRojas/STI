import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Sistema } from "../../interfaces/sistema.interface";
import { Tipo } from "../../interfaces/tipo.interface";
import { SistemaService } from "../../services/sistema.service";
import { TipoService } from "../../services/tipo.service";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-sistemas-modal",
  templateUrl: "./sistemas-modal.component.html",
  styles: [],
})
export class SistemasModalComponent implements OnInit {
  @Input() display: boolean;
  @Input() sistema: Sistema;
  @Output() mostrar: EventEmitter<any> = new EventEmitter();
  @Output() sistemaSaved: EventEmitter<string> = new EventEmitter();
  lectura: boolean = true;
  error: string;
  loading: boolean = true;

  /* #region variables*/
  TipoSistemas: Tipo[] = [];
  TipoEscritorioVirtual: Tipo[] = [];
  TipoBaseDatos: Tipo[] = [];
  TipoEstadoDesarrollo: Tipo[] = [];
  TipoUsuario: Tipo[] = [];
  TipoIIS: Tipo[] = [];
  TipoFrameworkWeb: Tipo[] = [];
  TipoFrameworkNet: Tipo[] = [];

  selectedTipoSistema: Tipo;
  selectedTipoEV: Tipo;
  selectedTipoBaseDatos: Tipo;
  selectedTipoEstadoDesarrollo: Tipo;
  selectedTipoUsuario: Tipo;
  selectedTipoIIS: Tipo;
  selectedTipoFrameworkWeb: Tipo;
  selectedTipoFrameworkNet: Tipo;
/* #endregion*/

  constructor(
    private sistemaService: SistemaService,
    private tipoService: TipoService
  ) {}

  ngOnInit() {
    this.lectura = !this.lectura;

    //Se cargan los tipos de datos
    forkJoin([
      this.tipoService.getTipoSistemas(),
      this.tipoService.getTipoEscritorioVirtual(),
      this.tipoService.getTipoBaseDatos(),
      this.tipoService.getTipoEstadoDesarrollo(),
      this.tipoService.getTipoUsuario(),
      this.tipoService.getTipoIIS(),
      this.tipoService.getTipoFrameworkWeb(),
      this.tipoService.getTipoFrameworkNet(),
    ]).subscribe(
      ([
        tipoSistemas,
        tipoEscritorioVirtual,
        tipoBaseDatos,
        tipoEstadoDesarrollo,
        tipoUsuario,
        tipoIIS,
        tipoFrameworkWeb,
        tipoFrameworkNet,
      ]) => {
        this.TipoSistemas = tipoSistemas;
        this.TipoEscritorioVirtual = tipoEscritorioVirtual;
        this.TipoBaseDatos = tipoBaseDatos;
        this.TipoEstadoDesarrollo = tipoEstadoDesarrollo;
        this.TipoUsuario = tipoUsuario;
        this.TipoIIS = tipoIIS;
        this.TipoFrameworkWeb = tipoFrameworkWeb;
        this.TipoFrameworkNet = tipoFrameworkNet;

        //Setear valores según sistema
        this.selectedTipoSistema = this.sistema.TipoSistema;
        this.selectedTipoEV = this.sistema.TipoEscritorioVirtual;
        this.selectedTipoBaseDatos = this.sistema.TipoBaseDatos;
        this.selectedTipoEstadoDesarrollo = this.sistema.TipoEstadoDesarrollo;
        this.selectedTipoUsuario = this.sistema.TipoUsuario;
        this.selectedTipoIIS = this.sistema.TipoIIS;
        this.selectedTipoFrameworkWeb = this.sistema.TipoFrameworkWeb;
        this.selectedTipoFrameworkNet = this.sistema.TipoFrameworkNet;
        this.loading = false;
      }
    );
  }

  setSistema() {
    this.sistemaService.setsistema(this.sistema).subscribe((resp) => {
      if (resp.Error === null) {
        this.error = null;
      } else {
        this.error = resp.Error.Message;
        console.error("Error al registrar sistema, ", resp.Error.ExceptionMessage);
      }
      this.closeModal();
    });
  }

  closeModal() {
    this.mostrar.emit(false);
    if (this.error !== undefined) {
      this.sistemaSaved.emit(this.error);
    }
  }
}
