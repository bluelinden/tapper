import Trait from './trait';
export default class Doer {
  assignTrait = function(traitType: string, traitName: string, traitValue: unknown) {
    this.traits[traitName] = new Trait(traitType, traitValue);
    return this.traits[traitName];
  };
  deleteTrait = function(traitName: string) {
    delete this.traits[traitName];
  };
  traits: Record<string, Trait> = {};
}