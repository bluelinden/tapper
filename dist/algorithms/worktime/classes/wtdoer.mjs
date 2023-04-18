import Doer from '../../../classes/doer/doer.mjs';
import WTTask from './wttask.mjs';
import { WTAttachedCapability, WTAttachedSkill } from './wtqualifiers.mjs';
export default class WTDoer extends Doer {
    newTask(name, description = '') {
        const task = new WTTask({ name: name, description: description });
        this.tasks.push(task.id);
        task.doers.push(this.id);
        return task;
    }
    attachTasks(tasks) {
        if (!Array.isArray(tasks))
            tasks = [tasks];
        tasks.forEach((task) => {
            this.tasks.push(task.id);
            task.doers.push(this.id);
        });
    }
    newSkillFromParent(parent, level, bias = 0) {
        const skill = new WTAttachedSkill({ parent: parent.id, level: level, bias: bias, doer: this.id });
        this.skills.push(skill.id);
        return skill;
    }
    newCapabilityFromParent(parent, bias = 0) {
        const capability = new WTAttachedCapability({ parent: parent.id, bias: bias, doer: this.id });
        this.capabilities.push(capability.id);
        return capability;
    }
    getTaskByid(id, tasks) {
        return tasks.find((task) => task.id === id);
    }
    constructor(config, tasks = []) {
        super();
        this.skillLevel = 0;
        this.skills = [];
        this.capabilities = [];
        this.tasks = [];
        if (!config.name)
            throw new Error('WTDoer requires a name');
        this.name = config.name;
        this.skillLevel = config.skillLevel;
        this.skills = config.skills;
        this.capabilities = config.capabilities;
        this.tasks = tasks;
    }
}
//# sourceMappingURL=wtdoer.mjs.map