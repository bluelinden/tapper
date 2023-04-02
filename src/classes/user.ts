class User {
  assignTrait = function(traitType: string, traitName: string, traitValue: unknown) {
    this.traits[traitName].value = traitValue;
    this.traits[traitName].type = traitType;
  };
  getTrait = function(traitName: string) {
    if (!this.traits[traitName]) {
      return null;
    }
    return this.traits[traitName];
  };
  setTrait = function(traitName: string, traitValue: unknown) {
    this.traits[traitName] = traitValue;
  };

}