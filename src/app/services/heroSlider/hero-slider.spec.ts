import { TestBed } from '@angular/core/testing';

import { HeroSlider } from './hero-slider';

describe('HeroSlider', () => {
  let service: HeroSlider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroSlider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
