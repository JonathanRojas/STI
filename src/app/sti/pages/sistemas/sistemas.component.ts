import { Component, OnInit } from "@angular/core";
import { Sistema } from "../../interfaces/interfaces";

@Component({
  selector: "app-sistemas",
  templateUrl: "./sistemas.component.html",
  styleUrls: ["./sistemas.component.css"],
})
export class SistemasComponent implements OnInit {
  sistemas: Sistema[] = [
    {
      codigo: "A313",
      nombre: "STI",
      desarrollador: "Jonathan Rojas",
    },
    {
      codigo: "L32",
      nombre: "Gestión Viáticos",
      desarrollador: "Orlando Miño",
    },
  ];
  cols: any[];
  display: boolean = false;
  sistemaSeleccionado: Sistema;

  ngOnInit() {
    this.cols = [
      { field: "codigo", header: "Código" },
      { field: "nombre", header: "Nombre" },
      { field: "desarrollador", header: "Desarrollador" },
    ];

    console.log(this.sistemas);
  }

  verSistema(sistema: Sistema) {
    this.display = true;
    this.sistemaSeleccionado = sistema;
  }
}
