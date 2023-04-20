import { Stator } from '../../classes/globalstate.mjs';
/**
 *
 * @param taskID - the task's id
 * @param stateObj - the global state object
 * @returns an array of doer ids
 */
export default function doersWhoHaveSkills(taskID: string, stateObj: Stator): Promise<string[]>;
