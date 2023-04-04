import Doer from '../../../classes/doer/doer';
import WTTask from './wttask';

interface ConfigObject {
  name: string;
  skillLevel: number;
  dogpileBias: object;
  skills: Skill[];
  capabilities: Capability[];
}

interface Skill {
  name: string;
  description: string;
  level: number;
  id: string;
}

interface Capability {
  name: string;
  description: string;
  needsBuddy: boolean;
  id: string;
}

export default class WTDoer extends Doer {
  skillLevel = 0;
  skills: Skill[] = [];
  capabilities: Capability[] = [];
  tasks: WTTask[] = [];
  name: string;

  newTask(name: string, description = '') {
    const task = new WTTask({name: name, description: description});
    this.tasks.push(task);
    task.doers.push(this);
    return task;
  }

  attachTasks(task: WTTask[] | WTTask) {
    if(!Array.isArray(task)) task = [task];
    task.forEach((task: WTTask) => {
      this.tasks.push(task);
      task.doers.push(this);
    });
  }

  constructor(config: ConfigObject, tasks: WTTask[] = []) {
    super();
    if(!config.name) throw new Error('WTDoer requires a name');
    this.name = config.name;
    this.skillLevel = config.skillLevel;
    this.skills = config.skills;
    this.capabilities = config.capabilities;
    this.tasks = tasks;
  }
}

export {Skill, Capability, ConfigObject};