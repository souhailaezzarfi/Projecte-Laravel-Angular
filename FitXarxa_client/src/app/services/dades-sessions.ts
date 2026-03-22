import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISessio } from '../interfaces/isessio';

@Injectable({
  providedIn: 'root'
})
export class DadesSessionsService {

  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getSessions(): Observable<ISessio[]> {
    return this.http.get<ISessio[]>(`${this.apiUrl}/sessios`);
  }

  getSessio(id: number): Observable<ISessio> {
    return this.http.get<ISessio>(`${this.apiUrl}/sessio/${id}`);
  }

  createSessio(sessio: ISessio): Observable<ISessio> {
    return this.http.post<ISessio>(`${this.apiUrl}/sessio`, sessio);
  }

  updateSessio(id: number, sessio: ISessio): Observable<ISessio> {
    return this.http.put<ISessio>(`${this.apiUrl}/sessio/${id}`, sessio);
  }

  deleteSessio(id: number): Observable<ISessio> {
    return this.http.delete<ISessio>(`${this.apiUrl}/sessio/${id}`);
  }
}