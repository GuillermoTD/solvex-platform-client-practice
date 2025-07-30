import { Component } from '@angular/core';
import { ApiDirective } from '../../directives/api-directive';
import { HomeService } from '../../services/pages/home/home-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home extends ApiDirective<any> {
  constructor(service: HomeService) {
    super(service);
  }
}
