import idGen from '../identifier.mjs';
var Task = /** @class */ (function () {
    function Task(name, description) {
        if (description === void 0) { description = ''; }
        this.doers = [];
        this.name = name;
        this.description = description;
        this.id = idGen('task');
    }
    return Task;
}());
export default Task;
//# sourceMappingURL=task.mjs.map