import * as Qualifiers from '../../classes/wtqualifiers.mjs';
import { Stator } from '../../classes/globalstate.mjs';

// this is extremely similar to the capfilter system, however instead of using capabilities, it uses skills. it creates skill scores for each doer, and if their skill is below the floor, they are not included in the list of doers who can do the task. also, if they don't have the skill to begin with, they aren't included.

export default function doersWhoHaveSkills(taskID: string, stateObj: Stator){
  const task = stateObj.tasks[taskID];
  const doersWhoHaveSkills: string[] = [];

  task.needsSkills.forEach((skillID: string) => {
    const skillRequirement = stateObj.qualifiers.skillRequirements[skillID];
    const originalSkill = stateObj.qualifiers.skills[skillRequirement.targetID];
    const attachedSkills = Object.values(stateObj.qualifiers.attachedSkills).filter((attachedSkill: Qualifiers.WTAttachedSkill) => attachedSkill.parentID === originalSkill.id);

    attachedSkills.forEach((attachedSkill: Qualifiers.WTAttachedSkill) => {
      const doer = stateObj.doers[attachedSkill.doerID];
      if (attachedSkill.level >= skillRequirement.floor){
        doersWhoHaveSkills.push(doer.id);
      }
    });
    return doersWhoHaveSkills;
  });
}