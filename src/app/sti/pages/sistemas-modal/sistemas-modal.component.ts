import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { forkJoin} from "rxjs";

import { Requerimiento } from '../../interfaces/requerimiento.interface';
import { Sistema } from "../../interfaces/sistema.interface";
import { Tipo } from "../../interfaces/tipo.interface";
import { SistemaService } from "../../services/sistema.service";
import { TipoService } from "../../services/tipo.service";

@Component({
  selector: "app-sistemas-modal",
  templateUrl: "./sistemas-modal.component.html",
  styles: [
    `
    ::ng-deep .p-datatable-scrollable-header-box {
  margin-right: 17px !important;
}
    `
  ],
})
export class SistemasModalComponent implements OnInit {

  /* #region variables*/
  @Input() display              : boolean;
  @Input() sistema              : Sistema;
  @Output() mostrar             : EventEmitter<any> = new EventEmitter();
  @Output() sistemaSaved        : EventEmitter<string> = new EventEmitter();
  lectura                       : boolean = true;
  error                         : string;
  loading                       : boolean = true;
  
  TipoSistemas                  : Tipo[] = [];
  TipoEscritorioVirtual         : Tipo[] = [];
  TipoBaseDatos                 : Tipo[] = [];
  TipoEstadoDesarrollo          : Tipo[] = [];
  TipoUsuario                   : Tipo[] = [];
  TipoIIS                       : Tipo[] = [];
  TipoFrameworkWeb              : Tipo[] = [];
  TipoFrameworkNet              : Tipo[] = [];
  Requerimientos                : Requerimiento[] = [];

  cols: any[];
/* #endregion*/

  constructor(
    private sistemaService: SistemaService,
    private tipoService: TipoService
  ) {}

  ngOnInit() {
    this.lectura = !this.lectura;

    forkJoin([
      this.tipoService.getTipoSistemas(),
      this.tipoService.getTipoEscritorioVirtual(),
      this.tipoService.getTipoBaseDatos(),
      this.tipoService.getTipoEstadoDesarrollo(),
      this.tipoService.getTipoUsuario(),
      this.tipoService.getTipoIIS(),
      this.tipoService.getTipoFrameworkWeb(),
      this.tipoService.getTipoFrameworkNet(),
      this.sistemaService.getRequerimientos(227), //this.sistema.Id
    ])
    .subscribe(
      ([tipoSistemas, tipoEscritorioVirtual, tipoBaseDatos, tipoEstadoDesarrollo, 
        tipoUsuario, tipoIIS, tipoFrameworkWeb, tipoFrameworkNet, requerimientos] :
      [Tipo[], Tipo[], Tipo[], Tipo[], Tipo[], Tipo[], Tipo[], Tipo[], Requerimiento[]]) => {
        this.TipoSistemas = tipoSistemas;
        this.TipoEscritorioVirtual = tipoEscritorioVirtual;
        this.TipoBaseDatos = tipoBaseDatos;
        this.TipoEstadoDesarrollo = tipoEstadoDesarrollo;
        this.TipoUsuario = tipoUsuario;
        this.TipoIIS = tipoIIS;
        this.TipoFrameworkWeb = tipoFrameworkWeb;
        this.TipoFrameworkNet = tipoFrameworkNet;
        this.Requerimientos = requerimientos;
        this.loading = false;
      }
    );   

    this.cols = [
      { field: "TipoDesarrollador.Nombre", header: "Desarrollador", width: '20%' },
      { field: "Descripcion", header: "Descripción", width: '50%' },
      { field: "FechaInicio", header: "Inicio", width: '10%'  },
      { field: "FechaTermino", header: "Termino", width: '10%'  },
      { field: "TipoEstado.Nombre", header: "Estado", width: '10%'  },
    ];  
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
