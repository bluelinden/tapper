import Task from './task';
import {v4 as uuidv4} from 'uuid';
export default class Thing {
  name: string;
  description: string;
  tasks: string[] = [];
  uuid: string;

  constructor(name: string, description = '', tasks: string[] = []) {
    this.name = name;
    this.description = description;
    this.tasks = tasks;
    this.uuid = uuidv4();
  }

}