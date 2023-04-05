import Thing from '../../../classes/thing/thing';
import WTTask from './wttask';

export default class WTThing extends Thing {
  name: string;
  tasks: string[] = [];
  uuid: string;

  newTask(name: string, description = '') {
    const task = new WTTask({name: name, description: description});
    this.tasks.push(task.uuid);
    task.things.push(this.uuid);
    return task;
  }

  attachTasks(task: WTTask[] | WTTask) {
    if(!Array.isArray(task)) task = [task];
    task.forEach((task: WTTask) => {
      this.tasks.push(task.uuid);
      task.things.push(this.uuid);
    });
  }

  getTaskByUUID(uuid: string, tasks: WTTask[]) {
    return tasks.find((task: WTTask) => task.uuid === uuid);
  }

  constructor(name: string, description = '', tasks: string[] = []) {
    super(name, description, tasks);
    this.name = name;
    this.tasks = tasks;
  }
}