import Doer from '../../../classes/doer/doer.mjs';
import WTTask from './wttask.mjs';
import { WTAttachedCapability, WTAttachedSkill, WTCapability, WTSkill } from './wtqualifiers.mjs';

interface ConfigObject {
  name: string;
  skillLevel: number;
  dogpileBias: object;
  skills: string[];
  capabilities: string[];
}

export default class WTDoer extends Doer {
  skillLevel = 0;
  skills: string[] = [];
  capabilities: string[] = [];
  tasks: string[] = [];
  name: string;

  newTask(name: string, description = '') {
    const task = new WTTask({name: name, description: description});
    this.tasks.push(task.id);
    task.doers.push(this.id);
    return task;
  }

  attachTasks(tasks: WTTask[] | WTTask) {
    if(!Array.isArray(tasks)) tasks = [tasks];
    tasks.forEach((task: WTTask) => {
      this.tasks.push(task.id);
      task.doers.push(this.id);
    });
  }

  newSkillFromParent(parent: WTSkill, level: number, bias = 0) {
    const skill = new WTAttachedSkill({parent: parent.id, level: level, bias: bias, doer: this.id});
    this.skills.push(skill.id);
    return skill;
  }

  newCapabilityFromParent(parent: WTCapability, bias = 0) {
    const capability = new WTAttachedCapability({parent: parent.id, bias: bias, doer: this.id});
    this.capabilities.push(capability.id);
    return capability;
  }

  getTaskByid(id: string, tasks: WTTask[]) {
    return tasks.find((task: WTTask) => task.id === id);
  }

  constructor(config: ConfigObject, tasks: string[] = []) {
    super();
    if(!config.name) throw new Error('WTDoer requires a name');
    this.name = config.name;
    this.skillLevel = config.skillLevel;
    this.skills = config.skills;
    this.capabilities = config.capabilities;
    this.tasks = tasks;
  }
}

export {ConfigObject};