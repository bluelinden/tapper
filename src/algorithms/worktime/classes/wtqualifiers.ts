import {v4 as uuidv4} from 'uuid';

class WTSkill {
  uuid: string;
  level: number;
  name: string;
  friendlyName: string;
  bias: number;

  constructor() {
    this.uuid = uuidv4();
  }
}

class WTCapability {
  uuid: string;
  name: string;
  friendlyName: string;
  bias: number;

  constructor() {
    this.uuid = uuidv4();
  }
}

class WTSkillRequirement {
  uuid: string;
  skill: string;
  levelOfBias: number;

  constructor(skillUUID: string, level: number) {
    this.uuid = uuidv4();
    this.skill = skillUUID;
    this.levelOfBias = level;
  }
}

class WTCapabilityRequirement {
  uuid: string;
  capability: string;
  levelOfBias: number;

  constructor(capabilityUUID: string, level: number) {
    this.uuid = uuidv4();
    this.capability = capabilityUUID;
    this.levelOfBias = level;
  }
}