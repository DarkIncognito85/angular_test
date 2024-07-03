import { Component } from '@angular/core';
import {TodoItem} from "./todo";
import {NgForOf} from "@angular/common";
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    TodoItemComponent,
    FormsModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todoList: TodoItem[] = [];

  constructor() {
    this.todoList.push(new TodoItem(1, "Faire des pates", false));
    this.todoList.push(new TodoItem(2, "Apprendre angular", false));
    this.todoList.push(new TodoItem(3, "Faire une todolist", false));
  }

  submit(element: HTMLInputElement)
  {
    const name = element.value;
    const item = new TodoItem(this.todoList.length + 2, name, false);
    this.todoList.push(item);
    element.value = '';
  }

  deleteItem(id: number) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }
}
