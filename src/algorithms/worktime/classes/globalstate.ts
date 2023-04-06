import WTDoer from './wtdoer';
import WTTask from './wttask';
import WTThing from './wtthing';
import * as Qualifiers from './wtqualifiers';

interface QualifierObj {
  capabilityRequirements: Qualifiers.WTCapabilityRequirement[];
  skillRequirements: Qualifiers.WTSkillRequirement[];
  capabilities: Qualifiers.WTCapability[];
  skills: Qualifiers.WTSkill[];
  attachedCapabilities: Qualifiers.WTAttachedCapability[];
  attachedSkills: Qualifiers.WTAttachedSkill[];
}

export class globalState {
  static doers: WTDoer[] = [];
  static tasks: WTTask[] = [];
  static things: WTThing[] = [];
  static qualifiers: QualifierObj = {
    capabilityRequirements: [],
    skillRequirements: [],
    capabilities: [],
    skills: [],
    attachedCapabilities: [],
    attachedSkills: []
  };
}