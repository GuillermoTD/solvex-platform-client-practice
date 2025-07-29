import { Injectable } from '@angular/core';
import { ApiService } from '../api-service';

@Injectable({
  providedIn: 'root',
})
export class NavbarService extends ApiService {
  constructor() {
    super();
    this.url =
      '/api/home?populate=Section.logoIcon.image&populate=Section.startNavbarButton&populate=Section.dropdownButtons&populate=Section.navbarButtons&populate=Section.themeToggle';
  }
}
