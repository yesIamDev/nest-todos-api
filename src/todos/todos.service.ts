import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
    todos: Todo[] = [
        {
            id: 1,
            title: "first todo",
            content: "Nest app first todo",
            done: true
        },
        {
            id: 2,
            title: "Second todo",
            content: "Nest app second todo",
            done: false
        }
    ];
    getTodos(): Todo[]{
        return this.todos;
    }
    createTodo(todo: Todo){
        this.todos = [...this.todos, todo];
    }
}
