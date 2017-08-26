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
var todo_service_1 = require('../shared/todo.service');
var TodosComponent = (function () {
    function TodosComponent(todoService) {
        this.todoService = todoService;
        this.todos = [];
    }
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService
            .getTodos()
            .subscribe(function (todos) { return _this.todos = todos; });
    };
    TodosComponent.prototype.create = function (title) {
        var _this = this;
        this.todoService.createTodo(title).subscribe(function (todo) { return _this.todos.push(todo); });
    };
    TodosComponent.prototype.delete = function (todo) {
        var _this = this;
        this.todoService.deleteTodo(todo).subscribe(function (response) {
            var index = _this.todos.indexOf(todo);
            if (index > -1) {
                _this.todos.splice(index, 1);
            }
        });
    };
    TodosComponent.prototype.toggle = function (todo) {
        this.todoService.toggleTodo(todo).subscribe(function (response) {
            todo.completed = !todo.completed;
        });
    };
    TodosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todos',
            templateUrl: 'todos.component.html',
            styleUrls: ['todos.component.css']
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map