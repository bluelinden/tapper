import Task from '../../../classes/thing/task';
import WTDoer from './wtdoer';
import WTThing from './wtthing';
import {WTCapabilityRequirement, WTSkillRequirement} from './wtqualifiers';
import {Skill, Capability} from './wtdoer';

export default class WTTask extends Task {
  name: string;
  difficulty: Skill[];
  needsSkills: WTSkillRequirement[] = [];
  needsCapabilities: WTCapabilityRequirement[] = [];
  things: string[] = [];
  doers: string[] = [];
  
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
    this.needsSkills.push(skill);
  }

  addCapabilityRequirement(capability: WTCapabilityRequirement) {
    this.needsCapabilities.push(capability);
  }

  getDoerByid(id: string, doers: WTDoer[]) {
    return doers.find((doer: WTDoer) => doer.id === id);
  }

  getThingByid(id: string, things: WTThing[]) {
    return things.find((thing: WTThing) => thing.id === id);
  }

  constructor(config: {name: string, description: string}) {
    super(config.name, config.description);
  }
}