import TextObject, { IncompatibleTypeError } from './textObject';
import { Mode } from './ivrita';

/** @enum {string} */
export const DataAttr = {
  [Mode.MALE]: 'ivritaMale',
  [Mode.FEMALE]: 'ivritaFemale',
  [Mode.NEUTRAL]: 'ivritaNeutral',
};

export default class TextElement extends TextObject {
  element = {};

  constructor(element) {
    if (!element) return false;
    if (!(element instanceof Element)) {
      throw IncompatibleTypeError;
    }

    super(element);

    this.element = element;

    if (!this.currentMode) {
      this.init();
    }
  }

  init() {
    super.init();
    if (this.element.dataset[DataAttr[Mode.MALE]]) {
      this.storedValues[Mode.MALE] = this.element.dataset[DataAttr[Mode.MALE]];
    }
    if (this.element.dataset[DataAttr[Mode.FEMALE]]) {
      this.storedValues[Mode.FEMALE] = this.element.dataset[DataAttr[Mode.FEMALE]];
    }
    if (this.element.dataset[DataAttr[Mode.NEUTRAL]]) {
      this.storedValues[Mode.NEUTRAL] = this.element.dataset[DataAttr[Mode.NEUTRAL]];
    }
  }

  getValue() {
    return this.element.innerHTML;
  }

  setValue(newVal) {
    this.element.innerHTML = newVal;
  }
}
