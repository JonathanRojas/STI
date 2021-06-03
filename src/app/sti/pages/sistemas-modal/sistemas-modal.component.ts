import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sistema } from '../../interfaces/sistema.interface';
import { SistemaService } from '../../services/sistema.service';

@Component({
  selector: 'app-sistemas-modal',
  templateUrl: './sistemas-modal.component.html',
  styles: []
})
export class SistemasModalComponent implements OnInit{

  @Input() display: boolean;
  @Input() sistema: Sistema;
  @Output() mostrar: EventEmitter<any> = new EventEmitter(); 
  lectura: boolean = true;
  
  constructor(private sistemaService: SistemaService){}

  ngOnInit(){
    this.lectura = !this.lectura;
  }

  setSistema() {
    this.sistemaService.setsistema(this.sistema).subscribe(sistema => console.log(sistema));
    this.mostrar.emit(false);
  }

  closeModal() {
    this.mostrar.emit(false);
  }
}
