// @ts-check
import TextObject, { IncompatibleTypeError } from './textObject';
import { Mode } from './ivrita';

/**
 * A map between an Ivrita Mode and the corresponding 'data-' overriding attribute name
 * @enum {string}
 * */
export const DataAttr = {
  [Mode.MALE]: 'ivritaMale',
  [Mode.FEMALE]: 'ivritaFemale',
  [Mode.NEUTRAL]: 'ivritaNeutral',
};

export default class TextElement extends TextObject {
  /**
   * @type {HTMLElement}
   */
  // @ts-ignore
  element = {};

  // @ts-ignore
  constructor(element) {
    // @ts-ignore
    if (!element) return false;
    if (!(element instanceof HTMLElement)) {
      throw IncompatibleTypeError;
    }

    super(element);

    this.element = element;

    if (!this.initialized) {
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
