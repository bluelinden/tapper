import idGen from '../../../classes/identifier.mjs';
var WTSkill = /** @class */ (function () {
    function WTSkill(_a) {
        var name = _a.name, friendlyName = _a.friendlyName;
        this.name = name;
        this.friendlyName = friendlyName;
        this.id = idGen('skill');
    }
    return WTSkill;
}());
var WTAttachedSkill = /** @class */ (function () {
    function WTAttachedSkill(_a) {
        var parent = _a.parent, bias = _a.bias, level = _a.level, doer = _a.doer;
        this.bias = bias;
        this.level = level;
        this.parentID = parent;
        this.doerID = doer;
        this.id = idGen('attachedskill');
    }
    return WTAttachedSkill;
}());
var WTCapability = /** @class */ (function () {
    function WTCapability(_a) {
        var name = _a.name, friendlyName = _a.friendlyName;
        this.name = name;
        this.friendlyName = friendlyName;
        this.id = idGen('capability');
    }
    return WTCapability;
}());
var WTAttachedCapability = /** @class */ (function () {
    function WTAttachedCapability(_a) {
        var parent = _a.parent, bias = _a.bias, doer = _a.doer;
        this.bias = bias;
        this.parentID = parent;
        this.doerID = doer;
        this.id = idGen('attachedcapability');
    }
    return WTAttachedCapability;
}());
var WTSkillRequirement = /** @class */ (function () {
    function WTSkillRequirement(name, skillID, bias, floor) {
        if (bias === void 0) { bias = 0.1; }
        if (floor === void 0) { floor = 0; }
        this.floor = 0;
        this.id = idGen('skillrequirement');
        this.biasMultiplier = bias;
        this.floor = floor;
        this.targetID = skillID;
        this.name = name;
    }
    return WTSkillRequirement;
}());
var WTCapabilityRequirement = /** @class */ (function () {
    function WTCapabilityRequirement(name, capabilityid) {
        this.id = idGen('capabilityrequirement');
        this.targetID = capabilityid;
        this.name = name;
    }
    return WTCapabilityRequirement;
}());
export { WTSkill, WTAttachedSkill, WTCapability, WTAttachedCapability, WTSkillRequirement, WTCapabilityRequirement };
//# sourceMappingURL=wtqualifiers.mjs.map