import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  home_message = signal('this is the home message going through signal');
  keyUpHandler() {
    console.log('I typed something in the input');
  }
  sayHello() {
    alert('this is clicked');
  }
  onMouseOver(event: MouseEvent) {
    console.log('Mouse Coordinates:', event.clientX, event.clientY);
  }
  keyUpHandlerEvent(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    console.log(`user typed ${inputElement.value} user key ${event.key}`);
  }
}
