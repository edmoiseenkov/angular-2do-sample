"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var Observable_1 = require("rxjs/Observable");
var Todo_1 = require('./Todo');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.apiUrl = 'api/todos';
    }
    TodoService.prototype.handleError = function (error) {
        console.error('Произошла ошибка', error);
        return Observable_1.Observable.throw(error.message || error);
    };
    TodoService.prototype.getTodos = function () {
        return this.http.get(this.apiUrl)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    TodoService.prototype.createTodo = function (title) {
        var headers = new http_1.Headers({ 'Content-Ttype': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var todo = new Todo_1.Todo(title);
        return this.http
            .post(this.apiUrl, todo, options)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    TodoService.prototype.deleteTodo = function (todo) {
        var headers = new http_1.Headers({ 'Content-Ttype': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var apiUrl = this.apiUrl + "/" + todo.id;
        return this.http
            .delete(apiUrl, options)
            .catch(this.handleError);
    };
    TodoService.prototype.toggleTodo = function (todo) {
        var headers = new http_1.Headers({ 'Content-Ttype': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var apiUrl = this.apiUrl + "/" + todo.id;
        return this.http
            .put(apiUrl, todo, options)
            .catch(this.handleError);
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map