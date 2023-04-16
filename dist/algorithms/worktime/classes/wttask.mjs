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
import Task from '../../../classes/thing/task.mjs';
var WTTask = /** @class */ (function (_super) {
    __extends(WTTask, _super);
    function WTTask(config) {
        var _this = _super.call(this, config.name, config.description) || this;
        _this.needsSkills = [];
        _this.needsCapabilities = [];
        _this.things = [];
        _this.doers = [];
        _this.isDone = false;
        return _this;
    }
    WTTask.prototype.attachToThings = function (things) {
        var _this = this;
        if (!Array.isArray(things))
            things = [things];
        things.forEach(function (thing) {
            thing.tasks.push(_this.id);
            _this.things.push(thing.id);
        });
    };
    WTTask.prototype.attachToDoers = function (doers) {
        var _this = this;
        if (!Array.isArray(doers))
            doers = [doers];
        doers.forEach(function (doer) {
            doer.tasks.push(_this.id);
            _this.doers.push(doer.id);
        });
    };
    WTTask.prototype.addSkillRequirement = function (skill) {
        this.needsSkills.push(skill.id);
        return skill;
    };
    WTTask.prototype.addCapabilityRequirement = function (capability) {
        this.needsCapabilities.push(capability.id);
    };
    return WTTask;
}(Task));
export default WTTask;
//# sourceMappingURL=wttask.mjs.map