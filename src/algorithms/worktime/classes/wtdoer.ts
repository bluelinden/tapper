import Doer from '../../../classes/doer/doer';
import WTTask from './wttask';

interface ConfigObject {
  name: string;
  skillLevel: number;
  dogpileBias: object;
  skills: Skill[];
  capabilities: Capability[];
}

export default class WTDoer extends Doer {
  skillLevel = 0;
  skills: Skill[] = [];
  capabilities: Capability[] = [];
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

export {Skill, Capability, ConfigObject};