import { TestBed } from '@angular/core/testing';

import { IconsHeaderService } from './icons-header-service';

describe('HeaderService', () => {
  let service: IconsHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconsHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
