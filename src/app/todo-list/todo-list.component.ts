import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from "../todo";
import {select} from "ng2-redux";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    @select() listTodo: Todo[];

    ngOnInit(): void {

    }

    constructor(private service: TodoService) {
    }

    addTodo(input) {
        if (!input.value) return;

        this.service.addTodo(input.value);

        input.value = '';
    }

    toggleTodo(todo) {
        this.service.toggleTodo(todo);
    }

    removeTodo(todo) {
        this.service.removeTodo(todo);
    }
}
