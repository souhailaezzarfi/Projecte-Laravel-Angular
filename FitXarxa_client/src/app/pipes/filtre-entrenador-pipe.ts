import { Pipe, PipeTransform } from '@angular/core';
import { IEntrenador } from '../interfaces/ientrenador';

@Pipe({
  name: 'filtreEntrenador',
  standalone: true
})
export class FiltreEntrenadorPipe implements PipeTransform {

  transform(entrenadors: IEntrenador[], cerca: string): IEntrenador[] {
    if (!cerca) return entrenadors;

    cerca = cerca.toLowerCase();

    return entrenadors.filter(e =>
      e.nom.toLowerCase().includes(cerca) ||
      e.cognoms.toLowerCase().includes(cerca)
    );
  }

}