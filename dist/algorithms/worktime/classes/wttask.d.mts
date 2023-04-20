import Task from '../../../classes/thing/task.mjs';
import WTDoer from './wtdoer.mjs';
import WTThing from './wtthing.mjs';
import { WTCapabilityRequirement, WTSkillRequirement } from './wtqualifiers.mjs';
export default class WTTask extends Task {
    name: string;
    needsSkills: string[];
    needsCapabilities: string[];
    things: string[];
    doers: string[];
    isDone: boolean;
    isReady: boolean;
    attachToThings(things: WTThing[] | WTThing): void;
    attachToDoers(doers: WTDoer[] | WTDoer): void;
    addSkillRequirement(skill: WTSkillRequirement): void;
    addCapabilityRequirement(capability: WTCapabilityRequirement): void;
    constructor(config: {
        name: string;
        description: string;
    });
}
