import { ChangeDetectorRef, Directive, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service';

@Directive({
  selector: '[appApiDirective]',
})
export abstract class ApiDirective<T> implements OnInit {
  protected data?: T;

  constructor(
    protected service: ApiService,
    private cdr: ChangeDetectorRef,
  ) {}

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
