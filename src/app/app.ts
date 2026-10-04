import { Component, signal } from '@angular/core';
import { Footer } from './shared/Footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet,Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');
}

