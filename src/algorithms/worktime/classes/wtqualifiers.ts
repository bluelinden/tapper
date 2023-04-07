import idGen from '../../../classes/identifier';

class WTSkill {
  id: string;
  name: string;
  friendlyName: string;

  constructor({name, friendlyName}: {name: string, friendlyName: string}) {
    this.name = name;
    this.friendlyName = friendlyName;
    this.id = idGen('skill');
  }
}

class WTAttachedSkill {
  level: number;
  bias: number;
  parentID: string;
  id: string;
  doerID: string;

  constructor({parent, bias, level, doer}: {parent: string, bias: number, level: number, doer: string}) {
    this.bias = bias;
    this.level = level;
    this.parentID = parent;
    this.doerID = doer;
    this.id = idGen('attachedskill');
  }
}

class WTCapability {
  id: string;
  name: string;
  friendlyName: string;

  constructor({name, friendlyName}: {name: string, friendlyName: string}) {
    this.name = name;
    this.friendlyName = friendlyName;
    this.id = idGen('capability');
  }
}

class WTAttachedCapability {
  bias: number;
  parentID: string;
  id: string;
  doerID: string;

  constructor({parent, bias, doer}: {parent: string, bias: number, doer: string}) {
    this.bias = bias;
    this.parentID = parent;
    this.doerID = doer;
    this.id = idGen('attachedcapability');
  }
}

class WTSkillRequirement {
  id: string;
  skill: string;
  biasMultiplier: number;
  floor = 0;
  targetID: string;
  name: string;

  constructor(name: string, skillID: string, bias = 0.1, floor = 0) {
    this.id = idGen('skillrequirement');
    this.biasMultiplier = bias;
    this.floor = floor;
    this.targetID = skillID;
    this.name = name;
  }
}

class WTCapabilityRequirement {
  id: string;
  targetID: string;
  name: string;

  constructor(name: string, capabilityid: string) {
    this.id = idGen('capabilityrequirement');
    this.targetID = capabilityid;
    this.name = name;
  }
}

export {WTSkill, WTAttachedSkill, WTCapability, WTAttachedCapability, WTSkillRequirement, WTCapabilityRequirement};