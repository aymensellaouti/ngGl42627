import { Component, effect, inject, input, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { APP_ROUTES } from '../config/routes.config';

@Component({
  imports: [RouterLink],
  selector: 'app-first',
  styleUrl: './first.css',
  templateUrl: './first.html',
})
export class First {
  name = signal('');
  acr = inject(ActivatedRoute);
  router = inject(Router);
  blackListEffect = effect(() => {
    const name = this.name()
    if (name == 'aymen') this.router.navigate([APP_ROUTES.fils]);
  })
  constructor() {
    console.log('Hello Component')
    // hello elyes
    // hello aymen
    this.acr.params.subscribe({
      next: (params) => {

        this.name.set(params['name']);
      }
    })

    // Old way
    // const name = this.acr.snapshot.params['name'];
    // if(name != 'aymen')
    //   this.name.set(name);
    // else
    //   this.router.navigate([APP_ROUTES.fils])
  }
}
