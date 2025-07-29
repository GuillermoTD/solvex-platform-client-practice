import { Injectable } from '@angular/core';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root',
})
export class HeaderService extends ApiService {
  constructor() {
    super();
    this.url = '/api/home?populate=socialsIcons';
  }
}
