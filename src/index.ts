import {WTDoer, WTTask, WTThing, Skill, Capability} from './algorithms/worktime/index';

const thing = new WTThing('thing');
const task = new WTTask({name: 'task', description: 'description'});
const doer = new WTDoer({
  name: 'doer',
  skillLevel: 1,
  dogpileBias: {},
  skills: [],
  capabilities: [],
});