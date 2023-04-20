import { Stator } from '../../classes/globalstate.mjs';
/**
 *
 * @param doerID - the doer's id
 * @param taskID - the task's id
 * @param stateObj - the global state object
 * @returns the doer's skill score
 */
export default function skillScore(doerID: string, taskID: string, stateObj: Stator): Promise<number>;
