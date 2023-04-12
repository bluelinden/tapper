import WTDoer from './wtdoer';
import WTTask from './wttask';
import WTThing from './wtthing';
import * as Qualifiers from './wtqualifiers';

interface QualifierObj {
  capabilityRequirements: Record<string, Qualifiers.WTCapabilityRequirement>;
  skillRequirements: Record<string, Qualifiers.WTSkillRequirement>;
  capabilities: Record<string, Qualifiers.WTCapability>;
  skills: Record<string, Qualifiers.WTSkill>;
  attachedCapabilities: Record<string, Qualifiers.WTAttachedCapability>;
  attachedSkills: Record<string, Qualifiers.WTAttachedSkill>;
}

interface ScoreObj {
  jobScore: number;
  skillScore: number;
}

class Stator {
  doers: Record<string, WTDoer> = {};
  tasks: Record<string, WTTask> = {};
  things: Record<string, WTThing> = {};
  qualifiers: QualifierObj = {
    capabilityRequirements: {},
    skillRequirements: {},
    capabilities: {},
    skills: {},
    attachedCapabilities: {},
    attachedSkills: {}
  };
  scores: Record<string, ScoreObj> = {};
}

const state = new Stator();
export { state, Stator };
