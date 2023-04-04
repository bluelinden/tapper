import {WTDoer, WTTask, WTThing} from './algorithms/worktime/index';
import * as Algorithms from './algorithms/index';

class TapperJS {
  static algorithm = Algorithms;
}

type TapperGlobal = typeof globalThis & {
  Tapper: TapperJS;
};

(globalThis as TapperGlobal).Tapper = TapperJS;



const thing = new WTThing('thing');
const task = new WTTask({name: 'task', description: 'description'});
const doer = new WTDoer({
  name: 'doer',
  skillLevel: 1,
  dogpileBias: {},
  skills: [],
  capabilities: [],
});

while (true);