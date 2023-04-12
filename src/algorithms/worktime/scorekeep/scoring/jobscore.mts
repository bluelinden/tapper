import { Stator } from '../../classes/globalstate.mjs';

// get a score from 0 to 1 for how many jobs a doer has at this moment, accounting for difficulty of the jobs they have.
export default function jobScore(doerID: string, stateObj: Stator){
  const doer = stateObj.doers[doerID];

  const taskDiffs: number[] = [];

  doer.tasks.forEach((taskID: string) => {
    const testTask = stateObj.tasks[taskID];
    const taskDifficulty = testTask.needsSkills.length;
    let taskScore = 1 - (10 * taskDifficulty );
    if (testTask.isDone) taskScore = taskScore * 0.6;
    else if  (!testTask.isReady) taskScore = taskScore * 0.3;
    taskDiffs.push(taskScore);
  });

  // add all items in the array together
  const jobScore = Math.max(1 - (taskDiffs.reduce((a, b) => a + b, 0)), 0 );

  return jobScore;
}