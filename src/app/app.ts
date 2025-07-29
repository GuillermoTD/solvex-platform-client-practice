import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconsHeader } from './components/icons-header/icons-header';
import { Navbar } from './components/navbar/navbar';
import { PartnersFooter } from './components/partners-footer/partners-footer';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IconsHeader, Navbar, PartnersFooter, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontend');
}
