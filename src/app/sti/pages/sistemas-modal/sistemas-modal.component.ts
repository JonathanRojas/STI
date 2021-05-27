import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sistema } from '../../interfaces/interfaces';

@Component({
  selector: 'app-sistemas-modal',
  templateUrl: './sistemas-modal.component.html',
  styles: []
})
export class SistemasModalComponent implements OnInit{

  @Input() display: boolean;
  @Input() sistema: Sistema = {
    codigo:'a',
    nombre:'b',
    desarrollador:'c'
  };
  @Output() mostrar: EventEmitter<any> = new EventEmitter(); 

  ngOnInit(){
    
  }

  setSistema() {
    console.log(this.sistema);
    //this.mostrar.emit(false);
  }

  closeModal() {
    this.mostrar.emit(false);
  }
}
