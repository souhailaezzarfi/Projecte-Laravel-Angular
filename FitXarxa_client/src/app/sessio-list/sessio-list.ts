import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DadesSessionsService } from '../services/dades-sessions';
import { ISessio } from '../interfaces/isessio';

@Component({
  selector: 'app-sessio-list',
  imports: [RouterLink],
  templateUrl: './sessio-list.html',
  styleUrl: './sessio-list.css',
})
export class SessioList implements OnInit {
  private sessioService = inject(DadesSessionsService);
  private cdr = inject(ChangeDetectorRef);

  sessions: ISessio[] = [];

  ngOnInit(): void {
    this.sessioService.getSessions().subscribe({
      next: (data: ISessio[]) => {
        this.sessions = data;
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('Error:', err);
      },
    });
  }

  deleteSessio(id: number): void {
    if (confirm('Estàs segur que vols eliminar aquesta sessió?')) {
      this.sessioService.deleteSessio(id).subscribe({
        next: () => this.ngOnInit(),
        error: (err) => console.error('Error eliminant:', err),
      });
    }
  }
}
