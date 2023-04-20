import Doer from '../../../classes/doer/doer.mjs';
import WTTask from './wttask.mjs';
import { WTAttachedCapability, WTAttachedSkill, WTCapability, WTSkill } from './wtqualifiers.mjs';
/**
 * A config object for WTDoer.
 */
interface ConfigObject {
    /**
     * The name of the doer
     */
    name: string;
    /**
     * The skill level of the doer
     * @default 0
     * @description This is the skill level of the doer. It is used to determine the doer's skill score.
     */
    skillLevel: number;
    /**
     * The doer's dogpile bias level
     * @default 0
     * @description This is the dogpile bias level of the doer. It is used to reduce the amount of work on a doer's plate, therefore avoiding a dogpile.
     */
    dogpileBias: object;
    /**
     * The doer's skills
     * @default []
     * @description This is an array of the doer's WTAttachedSkill IDs. It is used to determine the doer's skill score.
     * @see {@link WTSkill}
     * @see {@link WTAttachedSkill}
     * @see {@link WTSkillRequirement}
     */
    skills: string[];
    /**
     * The doer's capabilities
     * @default []
     * @description This is an array of the doer's WTAttachedCapability IDs. It is used to determine what tasks a doer can work on.
     * @see {@link WTCapability}
     * @see {@link WTAttachedCapability}
     * @see {@link WTCapabilityRequirement}
     * @see {@link WTTask}
     */
    capabilities: string[];
}
export default class WTDoer extends Doer {
    skillLevel: number;
    skills: string[];
    capabilities: string[];
    tasks: string[];
    name: string;
    /**
     * Create a new task and attach it to this doer
     * @param name - The name of the task
     * @param description - The description of the task
     * @description This method creates a new task and attaches it to this doer. It also adds this doer to the task's doers array.
     * @see {@link WTTask}
     */
    newTask(name: string, description?: string): WTTask;
    /**
     * Attach a task to this doer
     * @param tasks - The task(s) to attach
     * @description This method attaches a task to this doer. It also adds this doer to the task's doers array.
     * @see {@link WTTask}
     */
    attachTasks(tasks: WTTask[] | WTTask): void;
    /**
     * Create a new skill and attach it to this doer
     * @param parent - The parent skill
     * @param level - The level of the skill
     * @param bias - The bias of the skill
     * @description This method creates a new skill and attaches it to this doer. It also adds this doer to the skill's doers array.
     * @returns The new skill
     * @see {@link WTSkill}
     * @see {@link WTAttachedSkill}
     * @see {@link WTSkillRequirement}
     */
    newSkillFromParent(parent: WTSkill, level: number, bias?: number): WTAttachedSkill;
    /**
     * Create a new capability and attach it to this doer
     * @param parent - The parent capability
     * @param bias - The bias of the capability
     * @description This method creates a new capability and attaches it to this doer.
     * @returns The new capability
     * @see {@link WTCapability}
     * @see {@link WTAttachedCapability}
     * @see {@link WTCapabilityRequirement}
     */
    newCapabilityFromParent(parent: WTCapability, bias?: number): WTAttachedCapability;
    /**
     * WTDoer constructor
     * @param config - WTDoer config object
     * @param tasks - Array of task IDs
     */
    constructor(config: ConfigObject, tasks?: string[]);
}
export { ConfigObject };
