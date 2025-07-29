import { ChangeDetectorRef, Component } from '@angular/core';
import { NavbarService } from '../../services/navbar/navbar-service';
import { ApiDirective } from '../../directives/api-directive';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar extends ApiDirective<any> {
  constructor(service: NavbarService, cdr: ChangeDetectorRef) {
    super(service, cdr);
  }
}
