import * as Qualifiers from '../../classes/wtqualifiers';
import { Stator } from '../../classes/globalstate';

// based on a doer's skill level and the difficulty of any task, this function will return an object with the doer's id and their skill score. this score is made up of the difficulty of the task subtracted from the skill level in such a way that the end result is between 0 and 1. 

// algorithm: skillScore = 1 - (skillRequirement.difficulty * (doerSkill.level / 100));
export default function skillScore(doerID: string, taskID: string, stateObj: Stator){
  const doer = stateObj.doers[doerID];
  const task = stateObj.tasks[taskID];

  const skillScores: number[] = [];

  task.needsSkills.forEach((skillID: string) => {
    const skillRequirement = stateObj.qualifiers.skillRequirements[skillID]; // this is the skill requirement object
    const originalSkill = stateObj.qualifiers.skills[skillRequirement.targetID]; // this is the skill object

    const doerSkills: Qualifiers.WTAttachedSkill[] = [];
    doer.skills.forEach((skillID: string) => {
      doerSkills.push(stateObj.qualifiers.attachedSkills[skillID]);
    });

    const attachedSkill = doerSkills.find((attachedSkill: Qualifiers.WTAttachedSkill) => attachedSkill.parentID === originalSkill.id);

    if (!attachedSkill) return;

    skillScores.push( 1 - (skillRequirement.difficulty * (attachedSkill.level / 100)));
  });
  const skillScoreAverage = (skillScores.reduce((a, b) => a + b, 0) / skillScores.length) / 100;
  return skillScoreAverage;
}