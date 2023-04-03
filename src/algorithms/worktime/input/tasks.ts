import WTDoer from '../classes/wtdoer';
import Task from '../../../classes/thing/task';
import Thing from '../../../classes/thing/thing';

function getTasksFromThings(things: Thing[]): Task[] {
  const tasks: Task[] = [];
  things.forEach((thing: Thing) => {
    if(thing.tasks) {
      tasks.push(...thing.tasks);
    }
  });
  return tasks;
}

function getTasksFromDoers(doers: WTDoer[]): Task[] {
  const tasks: Task[] = [];
  doers.forEach((doer: WTDoer) => {
    if(doer.tasks) {
      tasks.push(...doer.tasks);
    }
  });
  return tasks;
}