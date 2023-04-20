export default class Task {
    name: string;
    description: string;
    data: unknown;
    doers: string[];
    id: string;
    constructor(name: string, description?: string);
}
