import Doer from '../doer/doer';
export default class Task {
  name: string;
  description: string;
  data: unknown;
  doers: string[] = [];
  uuid: string;
  constructor(name: string, description = '') {
    this.name = name;
    this.description = description;
    this.uuid = Math.random().toString(36).substring(2, 15);
  }
}