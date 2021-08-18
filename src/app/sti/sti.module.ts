import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../primeNG/primeNG.module';
import { SistemasComponent } from './pages/sistemas/sistemas.component';
import { SistemasModalComponent } from './pages/sistemas-modal/sistemas-modal.component';
import { DesarrolladorPipe } from './pipes/desarrollador.pipe';
import { InicioComponent } from './pages/inicio/inicio.component';


@NgModule({
  declarations: [
    SistemasComponent,
    SistemasModalComponent,
    DesarrolladorPipe,
    InicioComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class StiModule { }

//Comentario prueba