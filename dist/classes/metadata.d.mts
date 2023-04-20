export default class Metadata {
    type: string;
    id: string;
    private _value;
    constructor(type: string, value: unknown);
    clear(): void;
    get value(): unknown;
    set value(value: unknown);
}
