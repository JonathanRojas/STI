import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sistema } from '../../interfaces/sistema.interface';
import { Tipo } from '../../interfaces/tipo.interface';
import { SistemaService } from '../../services/sistema.service';
import { TipoService } from '../../services/tipo.service';

@Component({
  selector: 'app-sistemas-modal',
  templateUrl: './sistemas-modal.component.html',
  styles: []
})
export class SistemasModalComponent implements OnInit{

  @Input() display: boolean;
  @Input() sistema: Sistema;
  @Output() mostrar: EventEmitter<any> = new EventEmitter(); 
  @Output() sistemaSaved: EventEmitter<string> = new EventEmitter(); 
  lectura: boolean = true;
  error: string;

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

  constructor(private sistemaService: SistemaService, private tipoService: TipoService){}

  ngOnInit(){
    this.lectura = !this.lectura;
    this.getTipoSistemas();
    this.getTipoEscritorioVirtual();
    this.getTipoBaseDatos();
    this.getTipoEstadoDesarrollo();
    this.getTipoUsuario();
    this.getTipoIIS();
    this.getTipoFrameworkWeb();
    this.getTipoFrameworkNet();
  }

  setSistema() {
    this.sistemaService.setsistema(this.sistema)
      .subscribe(resp => {           
        if (resp.Error === null){
          this.error = null;
        }
        else{
          this.error = resp.Error.Message;
          console.error('Error al registrar sistema, ', resp.Error.ExceptionMessage);
        }        
        this.closeModal();
      })        
  }

  getTipoSistemas(){    
    this.tipoService.getTipoSistemas()
    .subscribe((tipos) => {
      this.TipoSistemas = tipos;
    }, (err) => {
      console.log(err.message);
      this.TipoSistemas = [];
    });
  }

  getTipoEscritorioVirtual(){    
    this.tipoService.getTipoEscritorioVirtual()
    .subscribe((tipos) => {
      this.TipoEscritorioVirtual = tipos;
    }, (err) => {
      console.log(err.message);
      this.TipoEscritorioVirtual = [];
    });
  }

  getTipoBaseDatos(){    
    this.tipoService.getTipoBaseDatos()
    .subscribe((tipos) => {
      this.TipoBaseDatos = tipos;
    }, (err) => {
      console.log(err.message);
      this.TipoBaseDatos = [];
    });
  }

  getTipoEstadoDesarrollo(){    
    this.tipoService.getTipoEstadoDesarrollo()
    .subscribe((tipos) => {
      this.TipoEstadoDesarrollo = tipos;
    }, (err) => {
      console.log(err.message);
      this.TipoEstadoDesarrollo = [];
    });
  }

  getTipoUsuario(){    
    this.tipoService.getTipoUsuario()
    .subscribe((tipos) => {
      this.TipoUsuario = tipos;
    }, (err) => {
      console.log(err.message);
      this.TipoUsuario = [];
    });
  }

  getTipoIIS(){    
    this.tipoService.getTipoIIS()
    .subscribe((tipos) => {
      this.TipoIIS = tipos;
    }, (err) => {
      console.log(err.message);
      this.TipoIIS = [];
    });
  }

  getTipoFrameworkWeb(){    
    this.tipoService.getTipoFrameworkWeb()
    .subscribe((tipos) => {
      this.TipoFrameworkWeb = tipos;
    }, (err) => {
      console.log(err.message);
      this.TipoFrameworkWeb = [];
    });
  }

  getTipoFrameworkNet(){    
    this.tipoService.getTipoFrameworkNet()
    .subscribe((tipos) => {
      this.TipoFrameworkNet = tipos;
    }, (err) => {
      console.log(err.message);
      this.TipoFrameworkNet = [];
    });
  }

  closeModal() {
    this.mostrar.emit(false);
    if (this.error !== undefined){
      this.sistemaSaved.emit(this.error);
    }    
  }
}
