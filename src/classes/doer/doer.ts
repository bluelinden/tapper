import Task from '../thing/task';
export default class Doer {
  uuid: string;
  tasks: string[] = [];

  constructor() {
    this.uuid = Math.random().toString(36).substring(2, 15);
  }
}