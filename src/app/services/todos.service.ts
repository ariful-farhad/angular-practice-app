import { Injectable } from '@angular/core';
import { Todo } from '../components/model/todo.type';

@Injectable({
  providedIn: 'root', // if root, that means, it can be accessed anywhere, if I delete this line, I have to individually tell each
  // component if I want todoservice
})
export class TodosService {
  todoItems: Array<Todo> = [
    { title: 'grocerries', id: 0, userId: 1, completed: false },
    { title: 'car wash', id: 1, userId: 1, completed: false },
  ];
  constructor() {}
}
