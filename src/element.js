import { genderize, NEUTRAL, ORIGINAL } from './ivrita';
import { HEB, SYNTAX } from './rules';

const hebrewRegex = new RegExp(HEB);
const ivritaSyntaxRegex = new RegExp(SYNTAX);

export default class Element {
  relevantNodes = [];

  elements = [];

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
    this.elements.forEach((el) => {
      this.constructor.instances.set(el, null);
    });
  }

  setMode(gender = NEUTRAL) {
    this.mode = gender;
    this.relevantNodes.forEach(([node, original]) => {
      let newVal;

      if (gender === ORIGINAL) {
        newVal = original;
      } else if (gender === NEUTRAL && !original.includes('{') && !original.includes('[')) {
        newVal = original;
      } else {
        newVal = genderize(original, gender);
      }

      if (newVal !== node.data) {
        node.data = newVal;
      }
    });

    return this;
  }

  registerTextNodes(element) {
    let currentNode;
    const walk = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => (
          (node.textContent.trim().length > 0
          && hebrewRegex.test(node.textContent) // Test for Hebrew Letters
          && ivritaSyntaxRegex.test(node.textContent)) // Test for Ivrita Syntax
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP),
      },
    );

    // eslint-disable-next-line no-cond-assign
    while ((currentNode = walk.nextNode())) {
      this.relevantNodes.push([currentNode, currentNode.data]);
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
