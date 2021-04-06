export const IncompatibleTypeError: Error;
export default class TextObject {
    static instances: WeakMap<object, any>;
    constructor(node: any);
    originalText: string;
    currentMode: boolean;
    storedValues: {};
    init(): void;
    setMode(newMode: any): void;
    getValue(): any;
    setValue(newVal: any): void;
    value: any;
}
