import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {NgRedux, select} from "ng2-redux";
import {IAppState} from "../redux/store";
import {Observable} from "rxjs";
import {ScalarObservable} from "rxjs/observable/ScalarObservable";

@Component({
    selector: 'app-todo-dashboard',
    templateUrl: './todo-dashboard.component.html',
    styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {

    @select((state: IAppState) => state.listTodo) listTodo: Observable<number>;
    @select((state: IAppState) => state.lastUpdated) lastUpdate: Date;

    ngOnInit(): void {

    }

    // Read the comment in TodoService
    constructor(private service: TodoService, private ngRedux: NgRedux<IAppState>) {

    }

    clearTodos() {
        this.service.clearTodos();
    }
}
