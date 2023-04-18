import Thing from '../../../classes/thing/thing.mjs';
import WTTask from './wttask.mjs';
export default class WTThing extends Thing {
    newTask(name, description = '') {
        const task = new WTTask({ name: name, description: description });
        this.tasks.push(task.id);
        task.things.push(this.id);
        return task;
    }
    attachTasks(task) {
        if (!Array.isArray(task))
            task = [task];
        task.forEach((task) => {
            this.tasks.push(task.id);
            task.things.push(this.id);
        });
    }
    getTaskByID(id, tasks) {
        return tasks.find((task) => task.id === id);
    }
    constructor(name, description = '', tasks = []) {
        super(name, description, tasks);
        this.tasks = [];
        this.name = name;
        this.tasks = tasks;
    }
}
//# sourceMappingURL=wtthing.mjs.map