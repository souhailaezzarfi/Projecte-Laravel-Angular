import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DadesEntrenadorsService } from '../services/dades-entrenadors';

@Component({
  selector: 'app-entrenador-form',
  imports: [ReactiveFormsModule],
  templateUrl: './entrenador-form.html',
  styleUrl: './entrenador-form.css',
})
export class EntrenadorForm implements OnInit {
  private fb = inject(FormBuilder);
  public router = inject(Router);
  private route = inject(ActivatedRoute);
  private entrenadorService = inject(DadesEntrenadorsService);

  form: FormGroup = this.fb.group({
    nom: ['', Validators.required],
    cognoms: ['', Validators.required],
  });

  id: number | null = null;
  imatgeFile: File | null = null;
  esEdicio: boolean = false;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ?? null;
    this.esEdicio = !!this.id;

    if (this.esEdicio) {
      this.entrenadorService.getEntrenador(this.id!).subscribe({
        next: (data) => {
          this.form.patchValue({
            nom: data.nom,
            cognoms: data.cognoms,
          });
        },
      });
    }
  }

  onFileChange(event: any): void {
    this.imatgeFile = event.target.files[0] ?? null;
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const formData = new FormData();
    formData.append('nom', this.form.value.nom);
    formData.append('cognoms', this.form.value.cognoms);
    if (this.imatgeFile) {
      formData.append('imatge', this.imatgeFile);
    }

    if (this.esEdicio) {
      this.entrenadorService.updateEntrenador(this.id!, formData).subscribe({
        next: () => this.router.navigate(['/entrenador-list']),
      });
    } else {
      this.entrenadorService.createEntrenador(formData).subscribe({
        next: () => this.router.navigate(['/entrenador-list']),
      });
    }
  }
}
