import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from "../todo-list/todo";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() item!: TodoItem;
  @Output() onDelete = new EventEmitter<number>();

  toggleCompleted() {
    this.item.completed = !this.item.completed;
  }

  removeItem(item: TodoItem) {
    this.onDelete.emit(item.id);
  }
}
