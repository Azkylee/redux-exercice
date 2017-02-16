import {tassign} from "tassign";
import {TODO_ADD, TODO_DELETE, TODO_DELETE_ALL, TODO_TOGGLE_COMPLETED} from "./action";
import {Todo} from "../todo";

export interface IAppState {
    listTodo : Todo[];
    lastUpdated: Date;
}
export interface IAction {
    type: string,
    payload: Object;
}

export const INITIAL_STATE: IAppState = {
    listTodo : [],
    lastUpdated: null
};

export function rootReduder(state: IAppState, action: IAction): IAppState {

    switch (action.type) {

        case TODO_ADD:
            let new_todo = new Todo(state.listTodo.length + 1, action.payload.toString());
            return tassign(state, {listTodo: state.listTodo.concat(new_todo), lastUpdated: new Date()});

        case TODO_DELETE:
            return tassign(state, {listTodo: state.listTodo.filter(todo => todo.id !== action.payload), lastUpdated: new Date()});

        case TODO_DELETE_ALL:
            return tassign(state, {listTodo: [], lastUpdated: new Date()});

        case TODO_TOGGLE_COMPLETED:
            const todo = state.listTodo.find(todo => todo.id === action.payload);
            const indexTodo = state.listTodo.indexOf(todo);
            const beforeTodos = state.listTodo.slice(0, indexTodo);
            const afterTodos = state.listTodo.slice(indexTodo + 1);
            const updatedTodo = tassign(todo, {isCompleted: !todo.isCompleted});

            return tassign(state, {listTodo: [].concat(beforeTodos).concat(updatedTodo).concat(afterTodos), lastUpdated: new Date()})
    }

    return state;
}