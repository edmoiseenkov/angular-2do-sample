"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var todos = [
            { id: 1, title: 'Изучить Javascript', completed: true },
            { id: 2, title: 'Изучить Angular 2', completed: false },
            { id: 3, title: 'Написать приложение', completed: false }
        ];
        return { todos: todos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=data.service.js.map