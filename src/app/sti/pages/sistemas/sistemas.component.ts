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
      { field: "Codigo", header: "Codigo" },
      { field: "Nombre", header: "Nombre" },
      { field: "Desarrollador", header: "Últ. Desarrollador" },
      { field: "FechaPublicacion", header: "Últ. Publicación" },
    ];   
    this.getSistemas();
  }

  loadCustomers(event: LazyLoadEvent) {
    this.loading = true; 
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

  getSistemas(){
    this.loading = true;
    this.sistemaService.getSistemas()
    .subscribe((sistemas) => {
      this.sistemas = sistemas;
      this.loading = false;
    }, (err) => {
      console.log(err.message);
      this.sistemas = [];
    });
  }

  showModal(sistema: Sistema) {
    this.display = true;
    this.sistemaSeleccionado = sistema;
  }

  closeModal(): void {
    this.display = false;
  }

  showMessage(mensaje: string): void {
    if (mensaje === null){
      this.messageService.add({ key: 'tst', severity: 'success', summary: 'Sistema registrado', detail: 'Sistema actualizado correctamente' });
    }
    else{
      this.messageService.add({ key: 'tst', severity: 'error', summary: 'Ocurrió un error', detail: mensaje });      
    }
    this.getSistemas();
  }
}
