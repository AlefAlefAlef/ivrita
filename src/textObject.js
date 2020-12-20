import { genderize, ORIGINAL, NEUTRAL } from './ivrita';

export const IncompatibleTypeError = new Error('Incompatible node passed to the node constructor');

export default class TextObject {
  originalText = '';

  currentMode = false;

  static instances = new WeakMap();

  constructor(node) {
    if (TextObject.instances.has(node)) {
      return TextObject.instances.get(node);
    }

    TextObject.instances.set(node, this);
  }

  init() {
    this.originalText = this.getValue();
  }

  setMode(newMode) {
    let newVal;
    this.currentMode = newMode;

    if (newMode === ORIGINAL) {
      newVal = this.originalText;
    } else if (newMode === NEUTRAL && !this.originalText.includes('{') && !this.originalText.includes('[')) {
      newVal = this.originalText;
    } else {
      newVal = genderize(this.originalText, newMode);
    }

    if (newVal !== this.getValue()) {
      this.setValue(newVal);
    }
  }

  getValue() {
    return this.value;
  }

  setValue(newVal) {
    this.value = newVal;
  }
}