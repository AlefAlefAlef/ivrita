// @ts-check
import TextObject, { IncompatibleTypeError } from './textObject';

export default class TextNode extends TextObject {
  /**
   * @type {Text}
   */
  // @ts-ignore
  node = {};

  /**
   * @param {Text} node
   */
  // @ts-ignore
  constructor(node) {
    // @ts-ignore
    if (!node) return false;
    if (!(node instanceof Text)) {
      throw IncompatibleTypeError;
    }

    super(node);

    this.node = node;

    if (!this.initialized) {
      this.init();
    }
  }

  getValue() {
    return this.node.data;
  }

  setValue(newVal) {
    this.node.data = newVal;
  }
}
