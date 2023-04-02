import Task from './task';
import Metadata from './metadata';
export default class Thing {
  name: string;
  description: string;
  tasks: Record<string, Task> = {};
  traits: Record<string, Metadata> = {};

  addMetadata = function(metadataName: string, metadataType: string, metadataValue: unknown) {
    this.traits[metadataName] = new Metadata(metadataType, metadataValue);
    return this.traits[metadataName];
  };
  deleteMetadata = function(metadataName: string) {
    delete this.traits[metadataName];
  };
  constructor(name: string, description: string, tasks: Record<string, Task> = {}) {
    this.name = name;
    this.description = description;
    this.tasks = tasks;
  }

}