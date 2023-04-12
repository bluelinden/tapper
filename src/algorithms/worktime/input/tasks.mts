import WTDoer from '../classes/wtdoer.mjs';
import WTTask from '../classes/wttask.mjs';
import WTThing from '../classes/wtthing.mjs';

function getTasksFromThings(things: string[]): WTTask[] {
  const tasks: WTTask[] = [];
  things.forEach((thing: string) => {
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