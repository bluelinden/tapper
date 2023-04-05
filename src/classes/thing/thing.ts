import Task from './task';
export default class Thing {
  name: string;
  description: string;
  tasks: string[] = [];
  uuid: string;

  constructor(name: string, description = '', tasks: string[] = []) {
    this.name = name;
    this.description = description;
    this.tasks = tasks;
    this.uuid = Math.random().toString(36).substring(2, 15);
  }

}