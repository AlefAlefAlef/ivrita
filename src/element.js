import {
  MALE, FEMALE, NEUTRAL, ORIGINAL, GENDERS,
} from './ivrita';
import TextNode from './node';
import { HEB, SYNTAX } from './utils/characters';

const hebrewRegex = new RegExp(HEB);
const ivritaSyntaxRegex = new RegExp(SYNTAX);

export default class Element {
  nodes = new Set();

  elements = [];

  static GENDERS = GENDERS;

  static MALE = MALE;

  static FEMALE = FEMALE;

  static NEUTRAL = NEUTRAL;

  static ORIGINAL = ORIGINAL;

  static instances = new WeakMap();

  constructor(elem = document.body) {
    if (elem instanceof NodeList) {
      this.elements = Array.from(elem);
    } else if (elem instanceof HTMLElement) {
      this.elements = [elem];
    } else if (typeof jQuery === 'function' && elem instanceof jQuery && typeof elem.toArray === 'function') {
      this.elements = elem.toArray();
    } else {
      throw new Error(`Passed argument is not an HTMLElement. Did you mean: 'document.querySelector("${elem.toString()}")'?`);
    }

    if (this.elements.length === 1 && this.constructor.instances.has(this.elements[0])) {
      const preExistingInstance = this.constructor.instances.get(this.elements[0]);
      preExistingInstance.registerTextNodes(this.elements[0]); // Make sure all nodes are registered
      return preExistingInstance;
    }

    this.elements.forEach((el) => {
      this.constructor.instances.set(el, this);
      this.registerTextNodes(el);
    });

    this.setFontFeatureSettings(true);
  }

  destroy() {
    this.setMode(ORIGINAL);
    this.setFontFeatureSettings(false);
    if (this.observer) {
      this.observer.disconnect();
    }
    this.nodes.clear();
    this.elements.forEach((el) => {
      this.constructor.instances.delete(el);
    });
  }

  setMode(gender = NEUTRAL) {
    this.mode = gender;
    this.nodes.forEach((node) => node.setMode(gender));
    return this;
  }

  registerTextNodes(element) {
    let currentNode;
    const walk = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => (
          TextNode.instances.has(node) || (
            (node.textContent.trim().length > 0
            && hebrewRegex.test(node.textContent) // Test for Hebrew Letters
            && ivritaSyntaxRegex.test(node.textContent)) // Test for Ivrita Syntax
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_SKIP)),
      },
    );

    // eslint-disable-next-line no-cond-assign
    while ((currentNode = walk.nextNode())) {
      this.nodes.add(new TextNode(currentNode));
    }
  }

  setFontFeatureSettings(isActive) {
    this.elements.forEach((el) => {
      const originalFFS = el.style.fontFeatureSettings;
      let result = originalFFS.slice();

      if (isActive) {
        if (!originalFFS.includes('titl')) {
          if (originalFFS) { // Only add a space if property exists
            result += ', ';
          }
          result += '"titl"';
        }
      } else if (originalFFS.includes('titl')) {
        result = originalFFS.replace(/(, )?"?'?titl"?'?/, '');
      }

      el.style.fontFeatureSettings = result;
    });

    return this;
  }

  getFontFeatureSettings() {
    return this.elements.filter((el) => el.style.fontFeatureSettings.includes('titl')).length;
  }
}

if (typeof jQuery === 'function') {
  jQuery.fn.ivrita = (gender) => {
    const i = new Element(this);
    if (typeof gender !== 'undefined') {
      i.setMode(gender);
    }
    return i;
  };
}
