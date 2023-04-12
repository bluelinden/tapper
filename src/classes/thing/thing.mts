import Task from './task.mjs';
import {v4 as idv4} from 'id';
export default class Thing {
  name: string;
  description: string;
  tasks: string[] = [];
  id: string;

  constructor(name: string, description = '', tasks: string[] = []) {
    this.name = name;
    this.description = description;
    this.tasks = tasks;
    this.id = idv4();
  }

}