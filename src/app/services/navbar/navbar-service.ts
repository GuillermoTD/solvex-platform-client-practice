import { Injectable } from '@angular/core';
import { ApiService } from '../api-service';

@Injectable({
  providedIn: 'root',
})
export class NavbarService extends ApiService {
  constructor() {
    super();
    this.url =
      '/api/global?populate[0]=navbar&populate[1]=navbar.logoButton.image&populate[2]=navbar.startNavbarButton&populate[3]=navbar.dropdownButtons&populate[4]=navbar.navbarButtons&populate[5]=navbar.themeToggle';
  }
}
