import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoDashboardComponent} from './todo-dashboard/todo-dashboard.component';
import {TodoService} from './todo.service';
import {NgRedux, NgReduxModule} from "ng2-redux";
import {IAppState, rootReduder, INITIAL_STATE} from "./redux/store";
import {fromJS} from "immutable";

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoDashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgReduxModule
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(rootReduder, INITIAL_STATE);
    }

}
