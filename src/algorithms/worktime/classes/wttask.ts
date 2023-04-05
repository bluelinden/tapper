import Task from '../../../classes/thing/task';
import WTDoer from './wtdoer';
import WTThing from './wtthing';
import {Skill, Capability} from './wtdoer';

export default class WTTask extends Task {
  name: string;
  difficulty: Skill[];
  requirements: Capability[] = [];
  things: string[] = [];
  doers: string[] = [];
  
  attachToThings(things: WTThing[] | WTThing) {
    if(!Array.isArray(things)) things = [things];
    things.forEach((thing: WTThing) => {
      thing.tasks.push(this.uuid);
      this.things.push(thing.uuid);
    });
  }

  attachToDoers(doers: WTDoer[] | WTDoer) {
    if(!Array.isArray(doers)) doers = [doers];
    doers.forEach((doer: WTDoer) => {
      doer.tasks.push(this.uuid);
      this.doers.push(doer.uuid);
    });
  }

  getDoerByUUID(uuid: string, doers: WTDoer[]) {
    return doers.find((doer: WTDoer) => doer.uuid === uuid);
  }

  getThingByUUID(uuid: string, things: WTThing[]) {
    return things.find((thing: WTThing) => thing.uuid === uuid);
  }

  constructor(config: {name: string, description: string}) {
    super(config.name, config.description);
  }
}