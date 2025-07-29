import { Injectable } from '@angular/core';
import { ApiService } from '../api-service';

@Injectable({
  providedIn: 'root',
})
export class PartnersFooterService extends ApiService {
  constructor() {
    super();
    this.url = '/api/global?populate[0]=partnersFooter.partnerBadges';
  }
}
