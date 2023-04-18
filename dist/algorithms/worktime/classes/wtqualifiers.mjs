import idGen from '../../../classes/identifier.mjs';
class WTSkill {
    constructor({ name, friendlyName }) {
        this.name = name;
        this.friendlyName = friendlyName;
        this.id = idGen('skill');
    }
}
class WTAttachedSkill {
    constructor({ parent, bias, level, doer }) {
        this.bias = bias;
        this.level = level;
        this.parentID = parent;
        this.doerID = doer;
        this.id = idGen('attachedskill');
    }
}
class WTCapability {
    constructor({ name, friendlyName }) {
        this.name = name;
        this.friendlyName = friendlyName;
        this.id = idGen('capability');
    }
}
class WTAttachedCapability {
    constructor({ parent, bias, doer }) {
        this.bias = bias;
        this.parentID = parent;
        this.doerID = doer;
        this.id = idGen('attachedcapability');
    }
}
class WTSkillRequirement {
    constructor(name, skillID, bias = 0.1, floor = 0) {
        this.floor = 0;
        this.id = idGen('skillrequirement');
        this.biasMultiplier = bias;
        this.floor = floor;
        this.targetID = skillID;
        this.name = name;
    }
}
class WTCapabilityRequirement {
    constructor(name, capabilityid) {
        this.id = idGen('capabilityrequirement');
        this.targetID = capabilityid;
        this.name = name;
    }
}
export { WTSkill, WTAttachedSkill, WTCapability, WTAttachedCapability, WTSkillRequirement, WTCapabilityRequirement };
//# sourceMappingURL=wtqualifiers.mjs.map