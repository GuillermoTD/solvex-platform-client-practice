import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsHeader } from './socials-header';

describe('SocialsHeader', () => {
  let component: SocialsHeader;
  let fixture: ComponentFixture<SocialsHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialsHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialsHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
