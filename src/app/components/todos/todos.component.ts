import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service'

import { Todo } from './todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todoService:TodoService) { }
  todos:Todo[];


  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

  deleteTodo(todo:Todo) {
    //Remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //Remove from Server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => { this.todos.push(todo);
    });
  }
}
