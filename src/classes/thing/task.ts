export default class Task {
  name: string;
  description: string;
  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
  clear() {
    this.name = '';
    this.description = '';
  }
  get() {
    return this.description;
  }
  set(description: string) {
    this.description = description;
  }
}