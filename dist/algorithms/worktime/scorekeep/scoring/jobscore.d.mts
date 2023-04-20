import { Stator } from '../../classes/globalstate.mjs';
/**
 *
 * @param doerID - the doer's id
 * @param stateObj - the global state object
 * @returns - the doer's job score
 */
export default function jobScore(doerID: string, stateObj: Stator): Promise<number>;
