import { Component } from '@angular/core';
import { ApiDirective } from '../../directives/api-directive';
import { IconsHeaderService } from '../../services/icons-header/icons-header-service';

@Component({
  selector: 'app-icons-header',
  imports: [],
  templateUrl: './icons-header.html',
  styleUrl: './icons-header.css',
})
export class IconsHeader extends ApiDirective<any> {
  constructor(service: IconsHeaderService) {
    super(service);
  }
}
