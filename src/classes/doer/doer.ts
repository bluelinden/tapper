import idGen from '../identifier';
export default class Doer {
  id: string;
  tasks: string[] = [];

  constructor() {
    this.id = idGen('doer');
  }
}