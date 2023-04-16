var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Thing from '../../../classes/thing/thing.mjs';
import WTTask from './wttask.mjs';
var WTThing = /** @class */ (function (_super) {
    __extends(WTThing, _super);
    function WTThing(name, description, tasks) {
        if (description === void 0) { description = ''; }
        if (tasks === void 0) { tasks = []; }
        var _this = _super.call(this, name, description, tasks) || this;
        _this.tasks = [];
        _this.name = name;
        _this.tasks = tasks;
        return _this;
    }
    WTThing.prototype.newTask = function (name, description) {
        if (description === void 0) { description = ''; }
        var task = new WTTask({ name: name, description: description });
        this.tasks.push(task.id);
        task.things.push(this.id);
        return task;
    };
    WTThing.prototype.attachTasks = function (task) {
        var _this = this;
        if (!Array.isArray(task))
            task = [task];
        task.forEach(function (task) {
            _this.tasks.push(task.id);
            task.things.push(_this.id);
        });
    };
    WTThing.prototype.getTaskByID = function (id, tasks) {
        return tasks.find(function (task) { return task.id === id; });
    };
    return WTThing;
}(Thing));
export default WTThing;
//# sourceMappingURL=wtthing.mjs.map