import Thing from '../../../classes/thing/thing.mjs';
import WTTask from './wttask.mjs';

export default class WTThing extends Thing {
  name: string;
  tasks: string[] = [];
  id: string;

  newTask(name: string, description = '') {
    const task = new WTTask({name: name, description: description});
    this.tasks.push(task.id);
    task.things.push(this.id);
    return task;
  }

  attachTasks(task: WTTask[] | WTTask) {
    if (!Array.isArray(task)) {
      task = [task];
    }
    task.forEach((task: WTTask) => {
      this.tasks.push(task.id);
      task.things.push(this.id);
    });
  }

  getTaskByID(id: string, tasks: WTTask[]) {
    return tasks.find((task: WTTask) => task.id === id);
  }

  constructor(name: string, description = '', tasks: string[] = []) {
    super(name, description, tasks);
    this.name = name;
    this.tasks = tasks;
  }
}
