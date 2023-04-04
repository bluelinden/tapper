import {WTDoer, WTTask, WTThing} from './algorithms/worktime/index';
import * as Algorithms from './algorithms/index';

class TapperJS {
  'algorithm' = Algorithms;
}

if (process.env.NODE_ENV === 'production') {
  const Tapper = TapperJS;
} else {
  let globalWithTapper = global as typeof globalThis & {
    Tapper: typeof TapperJS;
  };
  if (!globalWithTapper.Tapper) {
    globalWithTapper.Tapper = new TapperJS();
  }
  const Tapper = globalWithTapper.Tapper;
}



const thing = new WTThing('thing');
const task = new WTTask({name: 'task', description: 'description'});
const doer = new WTDoer({
  name: 'doer',
  skillLevel: 1,
  dogpileBias: {},
  skills: [],
  capabilities: [],
});

global.Tapper = TapperJS;

while (true);