import { Component, OnInit } from "@angular/core";
import { Message } from 'primeng//api';
import { MessageService } from 'primeng/api';
import { LazyLoadEvent } from 'primeng/api';
import { Sistema } from '../../interfaces/sistema.interface';
import { SistemaService } from '../../services/sistema.service';


@Component({
  selector: "app-sistemas",
  templateUrl: "./sistemas.component.html",
  styleUrls: ["./sistemas.component.css"],
  providers: [MessageService]
})
export class SistemasComponent implements OnInit {
  sistemas: Sistema[] = [];
  cols: any[];
  display: boolean = false;
  sistemaSeleccionado: Sistema;
  msgs: Message[] = [];
  loading: boolean = true;

  constructor(private sistemaService: SistemaService, private messageService: MessageService) { }


  ngOnInit() {
    this.cols = [
      { field: "Id", header: "Id" },
      { field: "Nombre", header: "Nombre" },
      { field: "TipoSistema.Nombre", header: "TipoSistema" },
      { field: "Descripcion", header: "Descripción" },
    ];
    this.sistemaService.getSistemas()
      .subscribe((sistemas) => {
        this.sistemas = sistemas;
      }, (err) => {
        //this.hayError = true;
        console.log(err.message);
        this.sistemas = [];
      });
  }

  loadCustomers(event: LazyLoadEvent) {
    this.loading = true;

    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {
      if (this.sistemas) {
        this.sistemas = this.sistemas.slice(
          event.first,
          event.first + event.rows
        );
        this.loading = false;
      }
    }, 1000);
  }

  showInfoViaToast() {
    this.messageService.add({ key: 'tst', severity: 'success', summary: 'Registro exitoso', detail: 'Sistema actualizado' });
  }

  showModal(sistema: Sistema) {
    this.display = true;
    this.sistemaSeleccionado = sistema;
  }

  closeModal(): void {
    this.display = false;
  }
}
