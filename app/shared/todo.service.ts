
import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { Todo } from './Todo'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TodoService {

    private apiUrl = 'api/todos';

    constructor(private http: Http) {}

    private handleError(error: any) {
        console.error('Произошла ошибка', error);
        return Observable.throw(error.message || error);
    }

    getTodos(): Observable<Todo[]> {
        return this.http.get(this.apiUrl)
                        .map(response => response.json().data)
                        .catch(this.handleError);
    }

    createTodo(title: string ) {
        let headers = new Headers({'Content-Ttype': 'application/json'});
        let options = new RequestOptions({ headers });

        let todo = new Todo(title);

        return this.http
            .post(this.apiUrl, todo, options)
            .map(response => response.json().data)
            .catch(this.handleError);
    }

    deleteTodo(todo: Todo) {
        let headers = new Headers({'Content-Ttype': 'application/json'});
        let options = new RequestOptions({ headers });
        let apiUrl = `${this.apiUrl}/${todo.id}`;

        return this.http
            .delete(apiUrl, options)
            .catch(this.handleError);
    }

    toggleTodo(todo: Todo) {
        let headers = new Headers({'Content-Ttype': 'application/json'});
        let options = new RequestOptions({ headers });
        let apiUrl = `${this.apiUrl}/${todo.id}`;

        return this.http
            .put(apiUrl, todo, options)
            .catch(this.handleError);
    }

}