import { Injectable } from '@angular/core';
import { ApiService } from '../../api-service';

@Injectable({
  providedIn: 'root',
})
export class HomeService extends ApiService {
  constructor() {
    super();
    this.url =
      '/api/home?populate[0]=banner&populate[1]=enterpriseServices&populate[2]=enterpriseServices.serviceButtons&populate[3]=enterpriseProducts&populate[4]=enterpriseProducts.productCards&populate[5]=enterpriseProducts.productCards.image&populate[6]=enterpriseProducts.productCards.button&populate[7]=achievements&populate[8]=achievements.achievementItems';
  }
}
