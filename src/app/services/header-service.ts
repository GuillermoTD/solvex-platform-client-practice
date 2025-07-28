import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private http = inject(HttpClient);

  getHeader() {
    return this.http.get(
      'http://localhost:1337/api/header?populate=dropdownButtons',
    );
  }
}
