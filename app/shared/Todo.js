"use strict";
var Todo = (function () {
    function Todo(title, completed) {
        if (completed === void 0) { completed = false; }
        this.title = title;
        this.completed = completed;
    }
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=Todo.js.map