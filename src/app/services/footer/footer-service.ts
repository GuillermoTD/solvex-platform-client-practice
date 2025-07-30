import { Injectable } from '@angular/core';
import { ApiService } from '../api-service';

@Injectable({
  providedIn: 'root',
})
export class FooterService extends ApiService {
  constructor() {
    super();
    this.url =
      '/api/global?populate[0]=footer&populate[1]=footer.footerBlocks&populate[2]=footer.footerBlocks.blockButtons&populate[3]=footer.footerBlocks.titleButton&populate[4]=footer.footerButtons&populate[5]=footer.socialIconsBar&populate[6]=footer.socialIconsBar.socialIconButtons&populate[7]=footer.socialIconsBar.socialIconButtons.image&populate[8]=footer.contactBlocks';
  }
}
