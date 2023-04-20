/**
 * A skill
 * @description This is a skill. It is used to determine the skill score of a doer.
 * @see {@link WTAttachedSkill}
 * @see {@link WTSkillRequirement}
 */
declare class WTSkill {
    id: string;
    name: string;
    friendlyName: string;
    constructor({ name, friendlyName }: {
        name: string;
        friendlyName: string;
    });
}
interface WTAttachedSkillConfig {
    /**
     * The level of the attached skill
     * @description This is the level of the attached skill. It is used as the skill level of a doer.
     */
    level: number;
    /**
     * The bias of the attached skill
     * @description This is the bias of the attached skill. It is used to determine how much the doer should be preferred over others for this skill.
     * @default 1
     */
    bias: number;
    /**
     * The ID of the parent skill
     * @description This is the ID of the parent skill. It is used to link attached capabilities to their requirements.
     */
    parentID: string;
    /**
     * The ID of the doer this is attached to
     * @description This is the ID of the doer this is attached to. It is used to link doer skills to their requirements.
     * @see {@link WTDoer}
     */
    doerID: string;
}
/**
 * An attached skill
 * @description This is an attached skill. It is used to determine the skill score of a doer.
 * @see {@link WTSkill}
 * @see {@link WTSkillRequirement}
 * @see {@link WTDoer}
 */
declare class WTAttachedSkill {
    level: number;
    bias: number;
    parentID: string;
    id: string;
    doerID: string;
    constructor(config: WTAttachedSkillConfig);
}
declare class WTCapability {
    id: string;
    name: string;
    friendlyName: string;
    constructor({ name, friendlyName }: {
        name: string;
        friendlyName: string;
    });
}
declare class WTAttachedCapability {
    bias: number;
    parentID: string;
    id: string;
    doerID: string;
    constructor({ parent, bias, doer }: {
        parent: string;
        bias: number;
        doer: string;
    });
}
declare class WTSkillRequirement {
    id: string;
    skill: string;
    biasMultiplier: number;
    difficulty: number;
    floor: number;
    targetID: string;
    name: string;
    /**
     * @param name - the name of the skill requirement
     * @param skillID - the ID of the skill
     * @param bias - the weight of the skill requirement
     * @param floor - the floor of the skill requirement, the lowest amount it will tolerate
     */
    constructor(name: string, skillID: string, bias?: number, floor?: number);
}
declare class WTCapabilityRequirement {
    id: string;
    targetID: string;
    name: string;
    /**
     * @param name - the name of the capability requirement
     * @param capabilityid - the ID of the capability's target
     */
    constructor(name: string, capabilityid: string);
}
export { WTSkill, WTAttachedSkill, WTCapability, WTAttachedCapability, WTSkillRequirement, WTCapabilityRequirement };
