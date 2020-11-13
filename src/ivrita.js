import rules, { SEP, HEB } from './rules';

const separatorRegex = new RegExp(SEP);
const hebrewRegex = new RegExp(HEB);

const PROTECTED = '__IVRITA_PROTECTED__';
const protectedRegexp = new RegExp(`\\{${PROTECTED}:(\\d+):${PROTECTED}\\}`, 'g');

export default class Ivrita {
  static ORIGINAL = 0;

  static MALE = 1;

  static FEMALE = 2;

  static NEUTRAL = 3;

  static GENDERS = [this.ORIGINAL, this.MALE, this.FEMALE, this.NEUTRAL];

  static instances = new WeakMap();

  relevantNodes = [];

  elem = {};

  constructor(elem = document.body) {
    this.constructor.instances.set(elem, this);

    this.element = elem;
    if (elem instanceof HTMLElement) {
      this.registerTextNodes(elem);
    } else {
      throw new Error(`Passed argument is not an HTMLElement. Did you mean: 'document.querySelector("${elem.toString()}")'?`);
    }
    this.setFontFeatureSettings(true);
  }

  destroy() {
    this.setMode(this.constructor.ORIGINAL);
    this.setFontFeatureSettings(false);
    this.observer.disconnect();
    this.constructor.instances.set(this.element, null);
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
  }

  registerTextNodes(element) {
    let currentNode;
    const walk = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => (
          (node.textContent.trim().length > 0
          && hebrewRegex.test(node.textContent)
          && separatorRegex.test(node.textContent))
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
    const originalFFS = this.element.style.fontFeatureSettings;
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

    this.element.style.fontFeatureSettings = result;
  }

  getFontFeatureSettings() {
    return this.element.style.fontFeatureSettings.includes('titl');
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
