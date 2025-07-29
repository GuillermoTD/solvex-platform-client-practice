import { TestBed } from '@angular/core/testing';

import { PartnersFooterService } from './partners-footer-service';

describe('PartnersFooterService', () => {
  let service: PartnersFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartnersFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
