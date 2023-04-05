import WTDoer from '../classes/wtdoer';
import WTTask from '../classes/wttask';
import WTThing from '../classes/wtthing';

function getTasksFromThings(things: WTThing[]): WTTask[] {
  const tasks: WTTask[] = [];
  things.forEach((thing: WTThing) => {
    if(thing.tasks) {
      tasks.push(...thing.tasks);
    }
  });
  return tasks;
}

function getTasksFromDoers(doers: WTDoer[]): WTTask[] {
  const tasks: WTTask[] = [];
  doers.forEach((doer: WTDoer) => {
    if(doer.tasks) {
      tasks.push(...doer.tasks);
    }
  });
  return tasks;
}

export {getTasksFromThings, getTasksFromDoers};