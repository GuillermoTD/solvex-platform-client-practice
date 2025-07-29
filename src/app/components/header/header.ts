import { ApiDirective } from '../../directives/api-directive';
import { HeaderService } from '../../services/header-service';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header extends ApiDirective<any> {
  constructor(service: HeaderService, cdr: ChangeDetectorRef) {
    super(service, cdr);
  }
}
