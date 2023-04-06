import * as Qualifiers from '../classes/wtqualifiers';
import WTDoer from '../classes/wtdoer';
import WTTask from '../classes/wttask';
import WTThing from '../classes/wtthing';
import { Stator } from '../classes/globalstate';


// the way this system works is simple:
// 1. a capability is created
// 2. a matching capability requirement is created, with the target capability ID attached, matching the ID of the capability
// 3. an attached capability is created, with the parent capability id attached. This is the capability that the doer has.
// 4. the way to find the doers who have a capability is to find 
function doersWhoHaveCapabilities(taskID: string, stateObj: Stator){
  const task = stateObj.tasks[taskID];
  const doersWhoHaveCapabilities: string[] = [];
  
  task.needsCapabilities.forEach((capabilityID: string) => {
    const capabilityRequirement = stateObj.qualifiers.capabilityRequirements[capabilityID];
    const originalCapability = stateObj.qualifiers.capabilities[capabilityRequirement.targetID];
    const attachedCapabilities = Object.values(stateObj.qualifiers.attachedCapabilities).filter((attachedCapability: Qualifiers.WTAttachedCapability) => attachedCapability.parentID === originalCapability.id);

    attachedCapabilities.forEach((attachedCapability: Qualifiers.WTAttachedCapability) => {
      const doer = stateObj.doers[attachedCapability.doerID];
      doersWhoHaveCapabilities.push(doer.id);
    });

    return doersWhoHaveCapabilities;
  });
}