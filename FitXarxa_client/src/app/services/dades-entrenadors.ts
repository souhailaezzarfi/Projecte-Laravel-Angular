import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEntrenador } from '../interfaces/ientrenador';
@Injectable({
  providedIn: 'root',
})
export class DadesEntrenadorsService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getEntrenadors(): Observable<IEntrenador[]> {
    return this.http.get<IEntrenador[]>(`${this.apiUrl}/entrenadors`);
  }

  getEntrenador(id: number): Observable<IEntrenador> {
    return this.http.get<IEntrenador>(`${this.apiUrl}/entrenador/${id}`);
  }

  createEntrenador(formData: FormData): Observable<IEntrenador> {
    return this.http.post<IEntrenador>(`${this.apiUrl}/entrenador`, formData);
  }

  updateEntrenador(id: number, formData: FormData): Observable<IEntrenador> {
    return this.http.post<IEntrenador>(`${this.apiUrl}/entrenador/${id}`, formData);
  }

  deleteEntrenador(id: number): Observable<IEntrenador> {
    return this.http.delete<IEntrenador>(`${this.apiUrl}/entrenador/${id}`);
  }
}
