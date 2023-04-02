import Metadata from '../metadata';
export default class Task {
  name: string;
  description: string;
  data: unknown;
  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
  addMetadata = function(metadataName: string, metadataType: string, metadataValue: unknown) {
    this.traits[metadataName] = new Metadata(metadataType, metadataValue);
    return this.traits[metadataName];
  };
  deleteMetadata = function(metadataName: string) {
    delete this.traits[metadataName];
  };
}