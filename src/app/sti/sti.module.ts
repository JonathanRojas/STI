import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../primeNG/primeNG.module';
import { SistemasComponent } from './pages/sistemas/sistemas.component';
import { SistemasModalComponent } from './pages/sistemas-modal/sistemas-modal.component';



@NgModule({
  declarations: [
    SistemasComponent,
    SistemasModalComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class StiModule { }
