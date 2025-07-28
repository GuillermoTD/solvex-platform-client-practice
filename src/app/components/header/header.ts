import { Component, inject } from '@angular/core';
import { HeaderService } from '../../services/header-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  data: any;
  headerService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.getHeader().subscribe({
      next: (res) => {
        console.log('Data received: ', res);

        this.data = res;
      },
      error: (err) => {
        console.log('Failed to fetch header: ', err);
      },
    });
  }
}
