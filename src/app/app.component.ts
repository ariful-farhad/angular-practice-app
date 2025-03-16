import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './compontents/header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  template: `
    <app-header> </app-header>
    <app-home> </app-home>
  `,
  styles: [],
})
export class AppComponent {
  title = 'first-ng-app';
}
