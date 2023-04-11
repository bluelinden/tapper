import WTDoer from '../../classes/wtdoer';
import WTTask from '../../classes/wttask';
import { Stator } from '../../classes/globalstate';


// get a score from 0 to 1 for how many jobs a doer has at this moment, accounting for difficulty of the jobs they have.
export default function jobScore(doerID: string, taskID: string, stateObj: Stator){
  const doer = stateObj.doers[doerID];
  const task = stateObj.tasks[taskID];

  const jobScores: number[] = [];

  doer.tasks.forEach((taskID: string) => {
    const task = stateObj.tasks[taskID];
    const taskDifficulty = task.difficulty;
    const jobScore = 1 - (taskDifficulty * (doer.skillLevel / 100));
    jobScores.push(jobScore);
  });

  const jobScoreAverage = (jobScores.reduce((a, b) => a + b, 0) / jobScores.length) / 100;
  return jobScoreAverage;
}