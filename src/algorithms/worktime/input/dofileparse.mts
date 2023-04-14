import WTDoer from '../classes/wtdoer.mjs';
import WTTask from '../classes/wttask.mjs';
import WTThing from '../classes/wtthing';
import {plainToClass} from 'class-transformer';
import 'reflect-metadata';

interface WTDoFile {
  doers: object[];
  things: object[];
  tasks: object[];
}

function parseDoFile(doFile: WTDoFile) {
  const doers: WTDoer[] = [];
  const things: WTThing[] = [];
  const tasks: WTTask[] = [];

  doFile.doers.forEach((doer: object) => {
    doers.push(plainToClass(WTDoer, doer));
  });
  doFile.things.forEach((thing: object) => {
    things.push(plainToClass(WTThing, thing));
  });
  doFile.tasks.forEach((task: object) => {
    tasks.push(plainToClass(WTTask, task));
  });
  return {doers, things, tasks};
}

export default parseDoFile;