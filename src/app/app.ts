import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

import { TestHttp } from './http/test-http/test-http';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TestHttp],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = signal('ngGl42627');

  isHidden = signal(false);

  constructor() {
    // setInterval(() => {
    // }, 1500)
  }
  showHide() {
    this.isHidden.update((actualValue) => !actualValue);
  }
}
