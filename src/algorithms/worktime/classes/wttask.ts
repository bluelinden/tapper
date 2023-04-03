import Task from '../../../classes/thing/task';
import WTDoer from './wtdoer';
import WTThing from './wtthing';
import {Skill, Capability} from './wtdoer';

export default class WTTask extends Task {
  name: string;
  difficulty: Skill[];
  requirements: Capability[] = [];
  things: WTThing[] = [];
  doers: WTDoer[] = [];
  
  attachToThings(things: WTThing[]) {
    things.forEach((thing: WTThing) => {
      thing.tasks.push(this);
      this.things.push(thing);
    });
  }

  attachToDoers(doers: WTDoer[]) {
    doers.forEach((doer: WTDoer) => {
      doer.tasks.push(this);
      this.doers.push(doer);
    });
  }

  constructor(config: {name: string, description: string}) {
    super(config.name, config.description);
  }
}