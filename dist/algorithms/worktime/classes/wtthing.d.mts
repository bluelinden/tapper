import Thing from '../../../classes/thing/thing.mjs';
import WTTask from './wttask.mjs';
export default class WTThing extends Thing {
    name: string;
    tasks: string[];
    id: string;
    /**
     * Create a new task and attach it to this thing
     * @param name The name of the task
     * @param description The description of the task
     * @returns The new task
     */
    newTask(name: string, description?: string): WTTask;
    /**
     * Attach a task to this thing
     * @param tasks The task or tasks to attach
     */
    attachTasks(tasks: WTTask[] | WTTask): void;
    /**
     * Make a new Thing
     * @param name The name of the thing
     * @param description The description of the thing
     * @param tasks The task IDs that the thing has
     */
    constructor(name: string, description?: string, tasks?: WTTask[]);
}
