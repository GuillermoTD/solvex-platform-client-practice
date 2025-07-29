import { Injectable } from '@angular/core';
import { ApiService } from '../api-service';

@Injectable({
  providedIn: 'root',
})
export class IconsHeaderService extends ApiService {
  constructor() {
    super();
    this.url =
      '/api/global?populate[0]=iconsHeader&populate[1]=iconsHeader.socialIconButtons.image';
  }
}
