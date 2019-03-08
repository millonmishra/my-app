import { Component, OnInit } from '@angular/core';
import { TODO } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: TODO[];
  todoObject: TODO;

  name: string;
  age: number;

  mytodo: TODO;

  constructor() {
  }

  ngOnInit() {
    this.todoList=[];
    this.todoObject = new TODO("", "");
  }

  addTodoToList() {
    console.log(this.todoObject);
    this.todoList.push(new TODO(this.todoObject.item, this.todoObject.status));
  }

}
