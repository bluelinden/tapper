import idGen from '../identifier.mjs';
var Thing = /** @class */ (function () {
    function Thing(name, description, tasks) {
        if (description === void 0) { description = ''; }
        if (tasks === void 0) { tasks = []; }
        this.tasks = [];
        this.name = name;
        this.description = description;
        this.tasks = tasks;
        this.id = idGen('thing');
    }
    return Thing;
}());
export default Thing;
//# sourceMappingURL=thing.mjs.map