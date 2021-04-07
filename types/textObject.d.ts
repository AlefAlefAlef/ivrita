export const IncompatibleTypeError: Error;
/**
 * @typedef {Attr|Text|HTMLElement} TextObjectNode
 */
export default class TextObject {
    /**
     * A (static) map of all the TextObject instances on this page, mapped by all of their TextNodes
     * @type {WeakMap<TextObjectNode, TextObject>}
     */
    static instances: WeakMap<TextObjectNode, TextObject>;
    /**
     * Construct a new TextObject and add it to the instances map
     * @param {TextObjectNode} node
     */
    constructor(node: TextObjectNode);
    originalText: string;
    /**
     * @type {Mode}
     */
    currentMode: Mode;
    initialized: boolean;
    /**
     * Pre-stored values for specific modes
     * @type {Object<Mode, string>}
     */
    storedValues: any;
    /**
     * Save aside the original value
     */
    init(): void;
    /**
     * Genderize the string of this TextObject according to the a new mode
     * @param {Mode} newMode The new mode to set to
     */
    setMode(newMode: Mode): void;
    /**
     * Get the string of this object
     * @returns {string}
     */
    getValue(): string;
    /**
     * Replace the string of this object
     * @param {string} newVal The new string
     */
    setValue(newVal: string): void;
    value: string;
}
export type TextObjectNode = Attr | Text | HTMLElement;
import { Mode } from "./ivrita";
