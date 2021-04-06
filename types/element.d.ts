export default class IvritaElement {
    static EVENT_MODE_CHANGED: string;
    static ORIGINAL: number;
    static MALE: number;
    static FEMALE: number;
    static NEUTRAL: number;
    static MULTI: number;
    static GENDERS: number[];
    static DataAttrs: {
        [x: number]: string;
    };
    static instances: Map<any, any>;
    static defaultMode: number;
    static genderize: (originalText: string, newMode: number, doneFunc: any) => string;
    static textObjects: WeakMap<object, any>;
    static setDefaultMode(newMode: any): void;
    static setMode(newMode: any): void;
    static acceptNodeFilter(node: any): number;
    constructor(elem: any, mode: any);
    nodes: Set<any>;
    elements: any[];
    mode: any;
    fontFeatureSettings: any;
    relavantAttributes: {
        [x: string]: string[];
        'a, img, button, input': string[];
        'input[type=submit], input[type=button], input[type=reset]': string[];
    };
    observer: MutationObserver;
    destroy(): void;
    setMode(newMode?: number): IvritaElement;
    genderize(text: any): any;
    dispatchModeChangedEvent(mode?: any): void;
    registerTextObjects(element: any): void;
    registerTextNodes(element: any): void;
    registerTextAttributes(element: any): void;
    onElementChange(mutationsList: any): void;
    setFontFeatureSettings(isActive: any): IvritaElement;
}
