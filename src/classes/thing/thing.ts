import Task from './task';
import Metadata from '../metadata';
export default class Thing {
  name: string;
  description: string;
  tasks: Task[] = [];
  uuid: string;

  constructor(name: string, description = '', tasks: Task[] = []) {
    this.name = name;
    this.description = description;
    this.tasks = tasks;
    this.uuid = Math.random().toString(36).substring(2, 15);
  }

}