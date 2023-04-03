import Doer from '../../../classes/doer/doer';
import Task from '../../../classes/thing/task';

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
  tasks: Task[] = [];
  name: string;

  constructor(config: ConfigObject, tasks: Task[] = []) {
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