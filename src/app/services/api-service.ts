import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService {
  private http = inject(HttpClient);
  protected url!: string;

  fetch<T>(): Observable<T> {
    return this.http.get<T>(`http://localhost:1337${this.url}`);
  }
}
