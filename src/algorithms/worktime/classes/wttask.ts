import Task from '../../../classes/thing/task';
import {Skill, Capability} from './wtdoer';

export default class WTTask extends Task {
  name: string;
  skillLevel = 0;
  skills: Skill[] = [];
  capabilities: Capability[] = [];
  tasks: Task[] = [];
  
  attachToThing(thing: Thing) {
    thing.tasks.push(this);
  }

  constructor(config: ConfigObject, tasks: Task[] = []) {
    super(config.name, config.description);
    if(!config.name) throw new Error('WTDoer requires a name');
    this.name = config.name;
    this.skillLevel = config.skillLevel;
    this.skills = config.skills;
    this.capabilities = config.capabilities;
    this.tasks = tasks;
  }
}