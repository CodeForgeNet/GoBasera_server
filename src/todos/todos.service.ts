import { Injectable } from '@nestjs/common';

export type Todo = { id: number; title: string; done: boolean };

@Injectable()
export class TodosService {
  private id = 1;
  private todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }

  create(title: string): Todo {
    const todo = { id: this.id++, title, done: false };
    this.todos.push(todo);
    return todo;
  }
}
