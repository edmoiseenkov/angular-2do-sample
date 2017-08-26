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
var TodoFormComponent = (function () {
    function TodoFormComponent() {
        this.title = '';
        this.create = new core_1.EventEmitter();
    }
    TodoFormComponent.prototype.onSubmit = function () {
        this.create.emit(this.title);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TodoFormComponent.prototype, "create", void 0);
    TodoFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-form',
            templateUrl: 'todo-form.component.html',
            styleUrls: ['todo-form.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TodoFormComponent);
    return TodoFormComponent;
}());
exports.TodoFormComponent = TodoFormComponent;
//# sourceMappingURL=todo-form.component.js.map