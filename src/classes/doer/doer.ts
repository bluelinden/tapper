import Task from '../thing/task';
import {v4 as uuidv4} from 'uuid';
export default class Doer {
  uuid: string;
  tasks: string[] = [];

  constructor() {
    this.uuid = uuidv4();
  }
}