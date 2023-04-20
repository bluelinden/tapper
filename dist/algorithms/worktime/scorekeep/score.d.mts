import { Stator, ScoreObj } from '../classes/globalstate.mjs';
/**
 *
 * @param taskID - the task's id
 * @param stateObj - the global state object
 * @returns an array of objects with the doer's id and their job score and skill score
 */
export default function getScores(taskID: string, stateObj: Stator): Promise<Record<string, ScoreObj>>;
