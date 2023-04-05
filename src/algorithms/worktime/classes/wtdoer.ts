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
  tasks: string[] = [];
  name: string;

  newTask(name: string, description = '') {
    const task = new WTTask({name: name, description: description});
    this.tasks.push(task.uuid);
    task.doers.push(this.uuid);
    return task;
  }

  attachTasks(tasks: WTTask[] | WTTask) {
    if(!Array.isArray(tasks)) tasks = [tasks];
    tasks.forEach((task: WTTask) => {
      this.tasks.push(task.uuid);
      task.doers.push(this.uuid);
    });
  }

  getTaskByUUID(uuid: string, tasks: WTTask[]) {
    return tasks.find((task: WTTask) => task.uuid === uuid);
  }

  constructor(config: ConfigObject, tasks: string[] = []) {
    super();
    if(!config.name) throw new Error('WTDoer requires a name');
    this.name = config.name;
    this.skillLevel = config.skillLevel;
    this.skills = config.skills;
    this.capabilities = config.capabilities;
    this.tasks = tasks;
    this.uuid = 'wtdoer-' + Math.random().toString(36).substring(2, 15);
  }
}

export {Skill, Capability, ConfigObject};