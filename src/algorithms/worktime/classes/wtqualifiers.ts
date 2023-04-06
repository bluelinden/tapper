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

  constructor({parent, bias, level}: {parent: string, bias: number, level: number}) {
    this.bias = bias;
    this.level = level;
    this.parentID = parent;
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

  constructor({parent, bias}: {parent: string, bias: number}) {
    this.bias = bias;
    this.parentID = parent;
    this.id = idGen('attachedcapability');
  }
}

class WTSkillRequirement {
  id: string;
  skill: string;
  biasMultiplier: number;
  floor = 0;
  targetSkillID: string;
  name: string;

  constructor(name: string, skillID: string, bias = 0.1, floor = 0) {
    this.id = idGen('skillrequirement');
    this.biasMultiplier = bias;
    this.floor = floor;
    this.targetSkillID = skillID;
    this.name = name;
  }
}

class WTCapabilityRequirement {
  id: string;
  targetCapabilityID: string;
  name: string;

  constructor(name: string, capabilityid: string) {
    this.id = idGen('capabilityrequirement');
    this.targetCapabilityID = capabilityid;
    this.name = name;
  }
}

export {WTSkill, WTAttachedSkill, WTCapability, WTAttachedCapability, WTSkillRequirement, WTCapabilityRequirement};