import rules, { HEB, SYNTAX } from './rules';

const hebrewRegex = new RegExp(HEB);
const ivritaSyntaxRegex = new RegExp(SYNTAX);

const PROTECTED = '__IVRITA_PROTECTED__';
const protectedRegexp = new RegExp(`\\{${PROTECTED}:(\\d+):${PROTECTED}\\}`, 'g');

export default class Ivrita {
  static ORIGINAL = 0;

  static MALE = 1;

  static FEMALE = 2;

  static NEUTRAL = 3;

  static GENDERS = [this.ORIGINAL, this.MALE, this.FEMALE, this.NEUTRAL];

  static instances = new Map();

  relevantNodes = [];

  elements = [];

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

    const existingInstance = this.constructor.instances.get(this.elements);
    if (existingInstance) {
      return existingInstance;
    }

    this.constructor.instances.set(this.elements, this);

    this.elements.forEach((el) => {
      this.registerTextNodes(el);
    });

    this.setFontFeatureSettings(true);
  }

  destroy() {
    this.setMode(this.constructor.ORIGINAL);
    this.setFontFeatureSettings(false);
    if (this.observer) {
      this.observer.disconnect();
    }
    this.elements.forEach((el) => {
      this.constructor.instances.set(el, null);
    });
  }

  setMode(gender = this.constructor.NEUTRAL) {
    this.mode = gender;
    this.relevantNodes.forEach(([node, original]) => {
      let newVal;

      if (gender === this.constructor.ORIGINAL) {
        newVal = original;
      } else if (gender === this.constructor.NEUTRAL && !original.includes('{') && !original.includes('[')) {
        newVal = original;
      } else {
        newVal = this.constructor.genderize(original, gender);
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

  static genderize(originalText, gender, doneFunc) {
    let genderized = originalText;
    const bracedStrings = [];

    if (genderized.includes('{')) {
      // Remove braced parts from text and save them aside
      genderized = genderized.replace(/\{(.*?)\}/g, (matched, string, index) => {
        bracedStrings[index] = string;
        return `{${PROTECTED}:${index}:${PROTECTED}}`;
      });
    }

    let prev = originalText;
    const used = [];
    rules.forEach(([pattern, male, female, neutral]) => {
      let replacement;
      switch (gender) {
        case this.FEMALE:
          replacement = female;
          break;

        case this.MALE:
          replacement = male;
          break;

        case this.NEUTRAL:
        default:
          if (neutral) replacement = neutral;
          break;
      }
      if (replacement !== undefined) {
        genderized = genderized.replace(pattern, replacement);
      }

      if (typeof doneFunc !== 'undefined' && prev !== genderized) {
        used.push(pattern);
        prev = genderized;
      }
    });

    if (bracedStrings.length) {
      // Bring back braced parts
      genderized = genderized.replace(protectedRegexp, (matched, group) => {
        const parsedIndex = parseInt(group, 10);
        if (bracedStrings[parsedIndex]) {
          return bracedStrings[parsedIndex];
        }
        return '';
      });
    }

    if (typeof doneFunc !== 'undefined') {
      doneFunc(used);
    }
    return genderized;
  }
}

if (typeof jQuery === 'function') {
  jQuery.fn.ivrita = (gender) => {
    const i = new Ivrita(this);
    if (typeof gender !== 'undefined') {
      i.setMode(gender);
    }
    return i;
  };
}
