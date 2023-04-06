import idGen from '../../../classes/identifier';

interface WTSkillConfig {
  name: string;
  friendlyName: string;
  bias: number;
  level: number;
}

class WTSkill {
  id: string;
  level: number;
  name: string;
  friendlyName: string;
  bias: number;

  constructor(config: WTSkillConfig) {
    this.name = config.name;
    this.friendlyName = config.friendlyName;
    this.bias = config.bias;
    this.level = config.level;
    this.id = idGen('skill');
  }
}

interface WTCapabilityConfig {
  name: string;
  friendlyName: string;
  bias: number;
}

class WTCapability {
  id: string;
  name: string;
  friendlyName: string;
  bias: number;

  constructor(config: WTCapabilityConfig) {
    this.name = config.name;
    this.friendlyName = config.friendlyName;
    this.bias = config.bias;
    this.id = idGen('capability');
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

export {WTSkill, WTCapability, WTSkillRequirement, WTCapabilityRequirement};