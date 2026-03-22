import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IEntrenador } from '../interfaces/ientrenador';
import { FormsModule } from '@angular/forms';
import { DadesEntrenadorsService } from '../services/dades-entrenadors';
import { FiltreEntrenadorPipe } from '../pipes/filtre-entrenador-pipe';

@Component({
  selector: 'app-entrenador-list',
  imports: [FormsModule, FiltreEntrenadorPipe, RouterLink],
  templateUrl: './entrenador-list.html',
  styleUrl: './entrenador-list.css',
})
export class EntrenadorList implements OnInit {
  private entrenadorService = inject(DadesEntrenadorsService);
  private cdr = inject(ChangeDetectorRef);

  entrenadors: IEntrenador[] = [];
  cercaText: string = '';

  ngOnInit(): void {
    this.entrenadorService.getEntrenadors().subscribe({
      next: (data: IEntrenador[]) => {
        this.entrenadors = data;
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('Error:', err);
      },
    });
  }

  deleteEntrenador(id: number): void {
    if (confirm('Estàs segur que vols eliminar aquest entrenador?')) {
      this.entrenadorService.deleteEntrenador(id).subscribe({
        next: () => this.ngOnInit(),
        error: (err) => console.error('Error eliminant:', err),
      });
    }
  }
}
