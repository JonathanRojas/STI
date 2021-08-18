import { Component, OnInit } from "@angular/core";
import { SelectItem } from "primeng/api";
import { SistemaService } from "../../services/sistema.service";
import { Estadistica } from "../../interfaces/estadistica.interface";
import { forkJoin } from "rxjs";
import { Requerimiento } from "../../interfaces/requerimiento.interface";
import { Publicacion } from '../../interfaces/publicacion.interface';
@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styles: [`
    img {
        width: 40px;
        height: 50px;
        border-radius:40%;
    }
    .p-col-10 h2 {
      font-size: 14px; font-weight: 500; margin: 0; color: #4c566a;
    }

    .p-col-10 span {
      font-size: 12px; color: #9199a9;
    }

    .layout-dashboard .download-files ul {
      max-height: 315px;
    }

  `],
})
export class InicioComponent implements OnInit {
  lineChartData     : any;
  lineChartOptions  : any;
  dropdownYears     : SelectItem[];
  selectedYear      : any;
  datosGraficos     : string[] = ["2", "6", "4", "8", "4", "6", "8"];

  estadisticas      : Estadistica;
  requerimientos    : Requerimiento;
  publicaciones     : Publicacion[]
  loading           : boolean = true;

  constructor(private sistemaService: SistemaService) {}

  ngOnInit(): void {
    forkJoin([
      this.sistemaService.getEstadisticas(),
      this.sistemaService.getPublicaciones()
    ])
      .subscribe(
      ([vEstadistica, vPublicaciones] : [Estadistica, Publicacion[]]) => {
        this.estadisticas = vEstadistica;
        this.publicaciones = vPublicaciones;
        this.lineChartData = {
          labels: JSON.parse("[" + this.estadisticas.Meses + "]"),
          datasets: [
            {
              label: "Pub. de Base Datos",
              data: JSON.parse("[" + this.estadisticas.BdGraph + "]"),
              borderColor: ["#f0c670"],
              borderWidth: 3,
              fill: false,
            },
            {
              label: "Pub. de Sistema",
              data: JSON.parse("[" + this.estadisticas.SisGraph + "]"),
              borderColor: ["#b086a8"],
              borderWidth: 3,
              fill: false,
            },
          ],
        };
        this.lineChartOptions = {
          responsive: true,
          maintainAspectRatio: true,
          fontFamily: "'Candara', 'Calibri', 'Courier', 'serif'",
          hover: {
            mode: "index",
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  fontColor: "#9199a9",
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  fontColor: "#9199a9",
                },
              },
            ],
          },
          legend: {
            display: true,
            labels: {
              fontColor: "#9199a9",
            },
          },
        };        
        this.loading = false;
      }      
    );

    this.dropdownYears = [
      { label: "2021", value: 2021 },
      { label: "2020", value: 2020 },
      { label: "2019", value: 2019 },
      { label: "2018", value: 2018 },
    ];
  }
}
