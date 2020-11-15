import { genderize, ORIGINAL, NEUTRAL } from './ivrita';

export default class TextNode {
  node = {};

  originalText = '';

  currentMode = false;

  static instances = new WeakMap();

  constructor(node) {
    if (!(node instanceof Node) || node.nodeType !== Node.TEXT_NODE) {
      return false;
    }

    if (this.constructor.instances.has(node)) {
      return this.constructor.instances.get(node);
    }

    this.constructor.instances.set(node, this);

    this.node = node;
    this.originalText = node.textContent;
  }

  setMode(gender) {
    let newVal;

    if (gender === ORIGINAL) {
      newVal = this.originalText;
    } else if (gender === NEUTRAL && !this.originalText.includes('{') && !this.originalText.includes('[')) {
      newVal = this.originalText;
    } else {
      newVal = genderize(this.originalText, gender);
    }

    if (newVal !== this.node.data) {
      this.node.data = newVal;
    }
  }
}
