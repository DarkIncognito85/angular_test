export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

export class TodoItem {
  public id: number;
  public name: string;
  public completed: boolean;

  constructor(id: number, name: string, completed: boolean) {
    this.id = id;
    this.name = name;
    this.completed = completed;
  }
}
