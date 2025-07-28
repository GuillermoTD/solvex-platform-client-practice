import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersFooter } from './partners-footer';

describe('PartnersFooter', () => {
  let component: PartnersFooter;
  let fixture: ComponentFixture<PartnersFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
