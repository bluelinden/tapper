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
import Doer from '../../../classes/doer/doer.mjs';
import WTTask from './wttask.mjs';
import { WTAttachedCapability, WTAttachedSkill } from './wtqualifiers.mjs';
var WTDoer = /** @class */ (function (_super) {
    __extends(WTDoer, _super);
    function WTDoer(config, tasks) {
        if (tasks === void 0) { tasks = []; }
        var _this = _super.call(this) || this;
        _this.skillLevel = 0;
        _this.skills = [];
        _this.capabilities = [];
        _this.tasks = [];
        if (!config.name)
            throw new Error('WTDoer requires a name');
        _this.name = config.name;
        _this.skillLevel = config.skillLevel;
        _this.skills = config.skills;
        _this.capabilities = config.capabilities;
        _this.tasks = tasks;
        return _this;
    }
    WTDoer.prototype.newTask = function (name, description) {
        if (description === void 0) { description = ''; }
        var task = new WTTask({ name: name, description: description });
        this.tasks.push(task.id);
        task.doers.push(this.id);
        return task;
    };
    WTDoer.prototype.attachTasks = function (tasks) {
        var _this = this;
        if (!Array.isArray(tasks))
            tasks = [tasks];
        tasks.forEach(function (task) {
            _this.tasks.push(task.id);
            task.doers.push(_this.id);
        });
    };
    WTDoer.prototype.newSkillFromParent = function (parent, level, bias) {
        if (bias === void 0) { bias = 0; }
        var skill = new WTAttachedSkill({ parent: parent.id, level: level, bias: bias, doer: this.id });
        this.skills.push(skill.id);
        return skill;
    };
    WTDoer.prototype.newCapabilityFromParent = function (parent, bias) {
        if (bias === void 0) { bias = 0; }
        var capability = new WTAttachedCapability({ parent: parent.id, bias: bias, doer: this.id });
        this.capabilities.push(capability.id);
        return capability;
    };
    WTDoer.prototype.getTaskByid = function (id, tasks) {
        return tasks.find(function (task) { return task.id === id; });
    };
    return WTDoer;
}(Doer));
export default WTDoer;
//# sourceMappingURL=wtdoer.mjs.map