import { ChangeDetectorRef, Component } from '@angular/core';
import { NavbarService } from '../../services/navbar/navbar-service';
import { ApiDirective } from '../../directives/api-directive';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [JsonPipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar extends ApiDirective<any> {
  constructor(service: NavbarService, cdr: ChangeDetectorRef) {
    super(service, cdr);
    console.log(this.data?.data?.Section[0]?.logoIcon?.image?.url);
  }
}
