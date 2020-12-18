import TextObject, { IncompatibleTypeError } from './textObject';

export default class TextNode extends TextObject {
  node = {};

  constructor(node) {
    if (!node) return false;
    if (!(node instanceof Text)) {
      throw IncompatibleTypeError;
    }

    super(node);

    this.node = node;

    if (!this.currentMode) {
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
