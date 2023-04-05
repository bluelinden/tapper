import Doer from '../doer/doer';
import {v4 as uuidv4} from 'uuid';
export default class Task {
  name: string;
  description: string;
  data: unknown;
  doers: string[] = [];
  uuid: string;
  constructor(name: string, description = '') {
    this.name = name;
    this.description = description;
    this.uuid = uuidv4();
  }
}