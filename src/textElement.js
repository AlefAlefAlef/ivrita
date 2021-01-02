import TextObject, { IncompatibleTypeError } from './textObject';
import { MALE, FEMALE, NEUTRAL } from './ivrita';

export const MALE_DATA_ATTR = 'ivritaMale';
export const FEMALE_DATA_ATTR = 'ivritaFemale';
export const NEUTRAL_DATA_ATTR = 'ivritaNeutral';

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
    if (this.element.dataset[MALE_DATA_ATTR]) {
      this.storedValues[MALE] = this.element.dataset[MALE_DATA_ATTR];
    }
    if (this.element.dataset[FEMALE_DATA_ATTR]) {
      this.storedValues[FEMALE] = this.element.dataset[FEMALE_DATA_ATTR];
    }
    if (this.element.dataset[NEUTRAL_DATA_ATTR]) {
      this.storedValues[NEUTRAL] = this.element.dataset[NEUTRAL_DATA_ATTR];
    }
  }

  getValue() {
    return this.element.innerHTML;
  }

  setValue(newVal) {
    this.element.innerHTML = newVal;
  }
}
