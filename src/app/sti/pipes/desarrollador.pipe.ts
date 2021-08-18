import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desarrollador'
})
export class DesarrolladorPipe implements PipeTransform {

  transform(desarrollador: string): string {
    if (desarrollador === null) return 'Sin Desarrollador';
    return desarrollador;
  }

}
