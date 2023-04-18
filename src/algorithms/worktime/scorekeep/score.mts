import { Stator } from '../classes/globalstate.mjs';

import capFilter from './filters/capfilter.mjs';
import skillFilter from './filters/skillfilter.mjs';

import jobScore from './scoring/jobscore.mjs';
import skillScore from './scoring/skillscore.mjs';

/**
 *
 * @param taskID
 * @param stateObj
 */
export default async function getScores(taskID: string, stateObj: Stator) {
  const task = stateObj.tasks[taskID];
  const eligibleDoers = await Promise.all([
    capFilter(taskID, stateObj),
    skillFilter(taskID, stateObj),
  ]);

  // array intersection between the two arrays
  const doersWhoCanDoTask = eligibleDoers[0].filter((doerID: string) => eligibleDoers[1].includes(doerID));

  /**
   *
   * @param doerID
   */
  async function scoreDoer(doerID: string) {
    return Promise.all([
      jobScore(doerID, stateObj),
      skillScore(doerID, taskID, stateObj),
    ]);
  }

  const scores: Record<string, number>[] = [];
  const scorePromises: Promise<void>[] = [];

  /**
   *
   * @param doerArray
   */
  async function getDoerScores(doerArray: string[]) {
    for (let i = 0; i < doerArray.length; i++) {
      const doerID = doerArray[i];
      scorePromises.push(scoreDoer(doerID).then((doerScore: number[]) => {
        scores[doerID] = {job: doerScore[0], skill: doerScore[1]};
      }));
    }
  }

  await getDoerScores(doersWhoCanDoTask);
  await Promise.all(scorePromises);

  const doerScores = scores.filter(score => score !== undefined);

  return doerScores;
}
