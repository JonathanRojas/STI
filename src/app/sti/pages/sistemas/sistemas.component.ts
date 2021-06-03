import { ClassGetter } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { Sistema } from '../../interfaces/sistema.interface';
import { SistemaService } from '../../services/sistema.service';


@Component({
  selector: "app-sistemas",
  templateUrl: "./sistemas.component.html",
  styleUrls: ["./sistemas.component.css"],
})
export class SistemasComponent implements OnInit {
  sistemas: Sistema[] = [];
  cols: any[];
  display: boolean = false;
  sistemaSeleccionado: Sistema;

  constructor(private sistemaService: SistemaService){}


  ngOnInit() {    
    this.cols = [
      { field: "Id", header: "Id" },
      { field: "Nombre", header: "Nombre" },
      { field: "TipoSistema.Nombre", header: "TipoSistema" },
      { field: "Descripcion", header: "Descripción" },
    ];
    this.sistemaService.getSistemas()
    .subscribe((sistemas) =>{  
      this.sistemas = sistemas;               
    }, (err) =>{
      //this.hayError = true;
      console.log(err.message);
      this.sistemas = [];
    });
  }

  showModal(sistema: Sistema) {
    this.display = true;
    this.sistemaSeleccionado = sistema;
  }

  closeModal(): void {
    this.display=false;
  }
}
