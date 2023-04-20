import { Stator } from '../../classes/globalstate.mjs';
/**
 *
 * @param taskID - the ID of the task
 * @param stateObj - the global state object
 * @returns an array of doer IDs
 */
export default function doersWhoHaveCapabilities(taskID: string, stateObj: Stator): Promise<string[]>;
