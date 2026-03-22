import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DadesSessionsService } from '../services/dades-sessions';
import { DadesEntrenadorsService } from '../services/dades-entrenadors';
import { IEntrenador } from '../interfaces/ientrenador';
import { ISessio } from '../interfaces/isessio';

@Component({
  selector: 'app-sessio-form',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './sessio-form.html',
  styleUrl: './sessio-form.css',
})
export class SessioForm implements OnInit {
  private fb = inject(FormBuilder);
  public router = inject(Router);
  private route = inject(ActivatedRoute);
  private sessioService = inject(DadesSessionsService);
  private entrenadorService = inject(DadesEntrenadorsService);

  form: FormGroup = this.fb.group({
    titol: ['', Validators.required],
    dataP: ['', Validators.required],
    places: ['', [Validators.required, Validators.min(1)]],
    entrenador_id: ['', Validators.required],
  });

  id: number | null = null;
  esEdicio: boolean = false;
  entrenadors: IEntrenador[] = [];

  ngOnInit(): void {
    // Cargar lista de entrenadors para el desplegable
    this.entrenadorService.getEntrenadors().subscribe({
      next: (data) => (this.entrenadors = data),
      error: (err) => console.error('Error carregant entrenadors:', err),
    });

    this.id = this.route.snapshot.params['id'] ?? null;
    this.esEdicio = !!this.id;

    if (this.esEdicio) {
      this.sessioService.getSessio(this.id!).subscribe({
        next: (data: ISessio) => {
          this.form.patchValue({
            titol: data.titol,
            dataP: data.dataP,
            places: data.places,
            entrenador_id: data.entrenador_id,
          });
        },
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    if (this.esEdicio) {
      this.sessioService.updateSessio(this.id!, this.form.value).subscribe({
        next: () => this.router.navigate(['/sessio-list']),
        error: (err) => console.error('Error editant:', err),
      });
    } else {
      this.sessioService.createSessio(this.form.value).subscribe({
        next: () => this.router.navigate(['/sessio-list']),
        error: (err) => console.error('Error creant:', err),
      });
    }
  }
}
