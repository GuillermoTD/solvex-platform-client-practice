import { ChangeDetectorRef, Directive, inject, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service';

@Directive({
  selector: '[appApiDirective]',
})
export abstract class ApiDirective<T> implements OnInit {
  protected data?: T;

  protected service: ApiService;
  private cdr = inject(ChangeDetectorRef);

  constructor(service: ApiService) {
    this.service = service;
  }

  ngOnInit() {
    this.service.fetch<T>().subscribe({
      next: (res: T) => {
        this.data = res;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log('Fetch failed: ', err);
      },
    });
  }
}
