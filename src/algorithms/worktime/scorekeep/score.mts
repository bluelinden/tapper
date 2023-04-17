import { Stator } from '../classes/globalstate.mjs';

import capFilter from './filters/capfilter.mjs';
import skillFilter from './filters/skillfilter.mjs';

import jobScore from './scoring/jobscore.mjs';
import skillScore from './scoring/skillscore.mjs';

export default async function getScores(taskID: string, stateObj: Stator) {
  const task = stateObj.tasks[taskID];
  const eligibleDoers = await Promise.all([
    capFilter(taskID, stateObj),
    skillFilter(taskID, stateObj),
  ]);

  // array intersection between the two arrays
  const doersWhoCanDoTask = eligibleDoers[0].filter((doerID: string) => eligibleDoers[1].includes(doerID));

  const newGlobalState = stateObj;

  // modify global state to reflect the new doers who can do the task
  newGlobalState.

  const doerScores = await Promise.all()
}