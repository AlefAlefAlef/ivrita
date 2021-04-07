// @ts-check
import { genderize, Mode } from './ivrita';

export const IncompatibleTypeError = new Error('Incompatible node passed to the node constructor');

/**
 * @typedef {Attr|Text|HTMLElement} TextObjectNode
 */

export default class TextObject {
  originalText = '';

  /**
   * @type {Mode}
   */
  currentMode;

  initialized = false;

  /**
   * Pre-stored values for specific modes
   * @type {Object<Mode, string>}
   */
  storedValues = {};

  /**
   * A (static) map of all the TextObject instances on this page, mapped by all of their TextNodes
   * @type {WeakMap<TextObjectNode, TextObject>}
   */
  static instances = new WeakMap();

  /**
   * Construct a new TextObject and add it to the instances map
   * @param {TextObjectNode} node
   */
  constructor(node) {
    if (TextObject.instances.has(node)) {
      return TextObject.instances.get(node);
    }

    TextObject.instances.set(node, this);
  }

  /**
   * Save aside the original value
   */
  init() {
    this.originalText = this.getValue();
    this.initialized = true;
  }

  /**
   * Genderize the string of this TextObject according to the a new mode
   * @param {Mode} newMode The new mode to set to
   */
  setMode(newMode) {
    /**
     * @type {string};
     */
    let newVal;
    this.currentMode = newMode;

    if (this.storedValues[newMode] !== undefined) {
      newVal = this.storedValues[newMode];
    } else if (newMode === Mode.ORIGINAL) {
      newVal = this.originalText;
    } else {
      newVal = genderize(this.originalText, newMode);
    }

    if (newVal !== this.getValue()) {
      this.setValue(newVal);
    }
  }

  /**
   * Get the string of this object
   * @returns {string}
   */
  getValue() {
    return this.value;
  }

  /**
   * Replace the string of this object
   * @param {string} newVal The new string
   */
  setValue(newVal) {
    this.value = newVal;
  }
}
