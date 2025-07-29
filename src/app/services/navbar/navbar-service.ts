import { Injectable } from '@angular/core';
import { ApiService } from '../api-service';

@Injectable({
  providedIn: 'root',
})
export class NavbarService extends ApiService {
  constructor() {
    super();
    this.url =
      '/api/home?populate=section.logoIcon.image&populate=section.startNavbarButton&populate=section.dropdownButtons&populate=section.navbarButtons&populate=section.themeToggle';
  }
}
