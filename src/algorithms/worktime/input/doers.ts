import Doer from '../../../classes/doer/doer';

export default class WTDoerParser {
  doerArray: Doer[];

  constructor(doerArray: Doer[]) {
    this.doerArray = doerArray;
    doerArray.forEach((element: Doer) => {
      if (!element.traits['skillLevel']) {
        element.assignTrait('number', 'skillLevel', 0);
      }
    });
  }
}