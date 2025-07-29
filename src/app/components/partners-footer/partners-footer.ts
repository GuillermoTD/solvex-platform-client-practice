import { Component } from '@angular/core';
import { ApiDirective } from '../../directives/api-directive';
import { PartnersFooterService } from '../../services/partners-footer/partners-footer-service';

@Component({
  selector: 'app-partners-footer',
  imports: [],
  templateUrl: './partners-footer.html',
  styleUrl: './partners-footer.css',
})
export class PartnersFooter extends ApiDirective<any> {
  constructor(service: PartnersFooterService) {
    super(service);
  }
}
