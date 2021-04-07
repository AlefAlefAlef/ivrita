import TextObject, { IncompatibleTypeError } from './textObject';

export default class TextAttribute extends TextObject {
  /**
   * @type {Attr}
   */
  attr = {};

  constructor(attr) {
    if (!attr) return false;
    if (!(attr instanceof Attr)) {
      throw IncompatibleTypeError;
    }

    super(attr);

    this.attr = attr;

    if (!this.initialized) {
      this.init();
    }
  }

  getValue() {
    return this.attr.value;
  }

  setValue(newVal) {
    this.attr.value = newVal;
  }
}
