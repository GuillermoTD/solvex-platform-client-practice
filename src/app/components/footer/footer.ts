import { Component } from '@angular/core';
import { ApiDirective } from '../../directives/api-directive';
import { FooterService } from '../../services/footer/footer-service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer extends ApiDirective<any> {
  constructor(service: FooterService) {
    super(service);
  }
}
