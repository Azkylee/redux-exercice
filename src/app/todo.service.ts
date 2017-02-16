import {Injectable, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import {Todo} from "./todo";
import {NgRedux} from "ng2-redux";
import {IAppState} from "./redux/store";
import {TODO_ADD, TODO_DELETE, TODO_DELETE_ALL, TODO_TOGGLE_COMPLETED} from "./redux/action";
import {Observable} from "rxjs";

// The two components we have in this app (TodoList and TodoDashboard) do not have a parent/child
// relationship. Whilst we can enforce this relationship in this app, there are cases where two 
// components are not conceptually in a parent/child relationship. In such cases, in order to
// communicate between two components, we need to use a service. If this service is injected 
// in the module where these two components belong, there is only a single instance of this 
// service in the memory (singleton). So, we can use that to keep the shared state and also to 
// publish events as one component makes changes to the state. This is a perfectly valid solution 
// and works well for small applications. But as your application grows in size and complexity, 
// you need a more scalable solution, and that's where Redux shines. 
// 
// So here is one implementation of such service. This is not necessarily the best implementation.
// Here, we are storing the list of todo items because it's something that both components are 
// interested in. TodoDashboard also has an additional field (lastUpdate) which is not used 
// anywhere else. 
// 
// In this service, as we add, toggle and remove items, we publish an event using EventEmitter. 
// We subscribe to these events in TodoDashboard to be notified of changes and update the internal
// component state accordingly. 
//
// Note that this service is in some ways similar to the "store" we have in Redux. In both 
// implementations we have our state in one place. Redux provides a more elegant and scalable 
// solution to maintain state in a predictable way. It also makes it easier to implement features
// like undo/redo, plus we get great tools for debugging our application as you'll see in the 
// next lecture. 

@Injectable()
export class TodoService {

    constructor(private ngRedux: NgRedux<IAppState>) {
    }

    addTodo(title: string) {

        this.ngRedux.dispatch({type: TODO_ADD, payload: title });
    }

    toggleTodo(todo : Todo) {
        this.ngRedux.dispatch({type: TODO_TOGGLE_COMPLETED, payload: todo.id});
    }

    removeTodo(todo: Todo) {
        this.ngRedux.dispatch({type: TODO_DELETE, payload: todo.id});
    }

    clearTodos() {
        this.ngRedux.dispatch({type: TODO_DELETE_ALL});
    }
}