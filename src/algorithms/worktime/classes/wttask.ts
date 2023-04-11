import Task from '../../../classes/thing/task';
import WTDoer from './wtdoer';
import WTThing from './wtthing';
import {WTCapabilityRequirement, WTSkillRequirement} from './wtqualifiers';

export default class WTTask extends Task {
  name: string;
  needsSkills: string[] = [];
  needsCapabilities: string[] = [];
  things: string[] = [];
  doers: string[] = [];
  isDone = false;
  
  attachToThings(things: WTThing[] | WTThing) {
    if(!Array.isArray(things)) things = [things];
    things.forEach((thing: WTThing) => {
      thing.tasks.push(this.id);
      this.things.push(thing.id);
    });
  }

  attachToDoers(doers: WTDoer[] | WTDoer) {
    if(!Array.isArray(doers)) doers = [doers];
    doers.forEach((doer: WTDoer) => {
      doer.tasks.push(this.id);
      this.doers.push(doer.id);
    });
  }

  addSkillRequirement(skill: WTSkillRequirement) {
    this.needsSkills.push(skill.id);
    return skill;
  }

  addCapabilityRequirement(capability: WTCapabilityRequirement) {
    this.needsCapabilities.push(capability.id);
  }

  constructor(config: {name: string, description: string}) {
    super(config.name, config.description);
  }
}