export default class Metadata {
  type: string;
  value: unknown;
  id: string;
  constructor(type: string, value: unknown) {
    this.type = type;
    this.value = value;
    // id is an eight character random string
    this.id = Math.random().toString(36).substring(2, 10);
  }
  clear() {
    this.type = '';
    this.value = '';
  }
  get() {
    return this.value;
  }
  set(value: unknown) {
    if (typeof(value) !== this.type){
      throw new Error(`Trait must be of type ${this.type}`);
    }
    this.value = value;
  }
}