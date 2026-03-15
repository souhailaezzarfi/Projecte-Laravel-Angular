import { IEntrenador } from './ientrenador';

export interface ISessio {
  id: number;
  titol: string;
  dataP: string;
  places: number;
  entrenador_id: number;
  entrenador: IEntrenador;
}
