import Metadata from '../metadata';
export default class Doer {
  assignTrait = function(traitType: string, traitName: string, traitValue: unknown) {
    this.traits[traitName] = new Metadata(traitType, traitValue);
    return this.traits[traitName];
  };
  deleteMetadata = function(traitName: string) {
    delete this.traits[traitName];
  };
  traits: Record<string, Metadata> = {};
}