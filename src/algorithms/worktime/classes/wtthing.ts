import Thing from '../../../classes/thing/thing';
import WTTask from '../../../classes/thing/task';

export default class WTThing extends Thing {
  name: string;
  tasks: WTTask[] = [];
  uuid: string;

  newTask(name: string, description = '') {
    const task = new WTTask(name, description);
    this.tasks.push(task);
    return task;
  }

  constructor(name: string, description = '', tasks: WTTask[] = []) {
    super(name, description, tasks);
    this.name = name;
    this.tasks = tasks;
    this.uuid = Math.random().toString(36).substring(2, 15);
  }
}