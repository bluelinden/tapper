import Thing from '../../../classes/thing/thing';
import WTTask from './wttask';

export default class WTThing extends Thing {
  name: string;
  tasks: WTTask[] = [];
  uuid: string;

  newTask(name: string, description = '') {
    const task = new WTTask({name: name, description: description});
    this.tasks.push(task);
    task.things.push(this);
    return task;
  }

  constructor(name: string, description = '', tasks: WTTask[] = []) {
    super(name, description, tasks);
    this.name = name;
    this.tasks = tasks;
    this.uuid = Math.random().toString(36).substring(2, 15);
  }
}