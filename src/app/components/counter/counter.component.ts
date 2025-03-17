import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  countervalue = signal(0);
  increment() {
    this.countervalue.update((val) => val + 1);
  }
  decrement() {
    this.countervalue.update((val) => val - 1);
  }
  reset() {
    this.countervalue.set(0);
  }
}
