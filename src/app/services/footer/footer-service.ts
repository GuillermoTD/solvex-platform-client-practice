import { Injectable } from '@angular/core';
import { ApiService } from '../api-service';

@Injectable({
  providedIn: 'root',
})
export class FooterService extends ApiService {
  constructor() {
    super();
    this.url = '';
  }
}
