export default class IvritaElement {
    /**
     * This is the name of the event which will be fired when the ivrita mode changes.
     * The event will fire on each and every element connected to this Ivrita instance.
     */
    static EVENT_MODE_CHANGED: string;
    /**
     * These are just references to other variables, for exportability.
     */
    /**
     * A map between an Ivrita Mode and the corresponding 'data-' overriding attribute name (exported)
     */
    static DataAttrs: {
        [x: number]: string;
    };
    /**
     * A map of all the TextObject instances on this page, mapped by all of their TextNodes (exported)
     */
    static textObjects: WeakMap<import("./textObject").TextObjectNode, TextObject>;
    /**
     * The genderize function from the Ivrita core (exported)
     */
    static genderize: (originalText: string, newMode: number, doneFunc?: (rules: import("./rules").BakedRule[]) => any) => string;
    static ORIGINAL: number;
    static MALE: number;
    static FEMALE: number;
    static NEUTRAL: number;
    static MULTI: number;
    /**
     * A list of all valid modes
     */
    static GENDERS: number[];
    /**
     * A (static) map of all the Ivrita instances on this page, mapped by all of their elements
     * @type {Map<Node, IvritaElement>}
     */
    static instances: Map<Node, IvritaElement>;
    /**
     * The default mode for all new ivrita instances (unless a mode is passed to the constructor)
     */
    static defaultMode: number;
    /**
     * @param {Mode} newMode
     */
    static setDefaultMode(newMode: Mode): void;
    /**
     * Set the mode for all Ivrita instances on this page
     * @param {number} newMode
     */
    static setMode(newMode: number): void;
    /**
     * @param {Text|Node} node
     */
    static acceptNodeFilter(node: Text | Node): number;
    /**
     * Construct a new Ivrita instance.
     * @param {Iterable<Node>|JQuery} [elem] The element (or elements) which need to be genderized
     * @param {Mode} [mode] The initial mode to start with
     */
    constructor(elem?: Iterable<Node> | JQuery, mode?: Mode);
    /**
     * A set of all the Ivrita TextObjects this instance tracks
     * @type {Set<TextObject>}
     */
    nodes: Set<TextObject>;
    /**
     * An array of all the elements this instance tracks (the elements passed to its construtor)
     * @type {Node[]}
     */
    elements: Node[];
    /**
     * The current mode of this Ivrita instance
     * @type {Mode}
     */
    mode: Mode;
    /**
     * Whether or not 'font-feature-setting' is set to 'titl' for this Ivrita instance
     * @type {boolean}
     */
    fontFeatureSettings: boolean;
    /**
     * A map between DOM selectors to all their possible attributes which need to be genderized
     * @type {{[domSelector: string]: string[]}}
    */
    relavantAttributes: {
        [domSelector: string]: string[];
    };
    observer: MutationObserver;
    /**
     * Disable this Ivrita instance and return everything to its original state
     */
    destroy(): void;
    /**
     * Change the mode of this ivrita instance and genderize all the strings accordingly
     * @param {Mode} newMode The new mode to change into
     */
    setMode(newMode?: Mode): IvritaElement;
    /**
     * Genderize a string with the current mode of this Ivrita instance
     * @param {any} text
     */
    genderize(text: any): string;
    /**
     * Fire the mode-changed event on all of this instance's events
     * @param {Mode} mode The new mode
     */
    dispatchModeChangedEvent(mode?: Mode): void;
    /**
     * @param {Node} element
     */
    registerTextObjects(element: Node): void;
    /**
     * @param {Node} element
     */
    registerTextNodes(element: Node): void;
    /**
     * @param {Element} element
     */
    registerTextAttributes(element: Element): void;
    /**
     * @param {MutationRecord[]} mutationsList
     */
    onElementChange(mutationsList: MutationRecord[]): void;
    /**
     * Turn on/off the "multi" feature
     * @param {boolean} isActive
     */
    setFontFeatureSettings(isActive: boolean): IvritaElement;
}
import TextObject from "./textObject";
import { Mode } from "./ivrita";
