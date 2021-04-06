import { genderize, Mode } from './ivrita';

export const IncompatibleTypeError = new Error('Incompatible node passed to the node constructor');

export default class TextObject {
  originalText = '';

  currentMode = false;

  storedValues = {}

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

  getValue() {
    return this.value;
  }

  setValue(newVal) {
    this.value = newVal;
  }
}
