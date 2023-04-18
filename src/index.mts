import {WTDoer, WTTask, WTThing} from './algorithms/worktime/score.mjs';
import * as Algorithms from './algorithms/index.mjs';


const thing = new WTThing('thing');
const task = new WTTask({name: 'task', description: 'description'});
const doer = new WTDoer({
  name: 'doer',
  skillLevel: 1,
  dogpileBias: {},
  skills: [],
  capabilities: [],
});

while (true){} // Keep the process alive so we can debug it
