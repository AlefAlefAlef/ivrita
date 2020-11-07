import rules, { SEP } from './rules';

const separatorRegex = new RegExp(SEP);

const PROTECTED = '__IVRITA_PROTECTED__';
const protectedRegexp = new RegExp(`\\{${PROTECTED}:(\\d+):${PROTECTED}\\}`, 'g');

export default class Ivrita {
  static ORIGINAL = 0;

  static MALE = 1;

  static FEMALE = 2;

  static NEUTRAL = 3;

  relevantNodes = [];

  elem = {};

  constructor(elem = document.body) {
    this.element = elem;
    if (elem instanceof HTMLElement) {
      this.registerTextNodes(elem);
    } else {
      throw new Error(`Passed argument is not an HTMLElement. Did you mean: 'document.querySelector("${elem.toString()}")'?`);
    }
  }

  setMode(gender) {
    this.relevantNodes.forEach(([node, original]) => {
      let newVal;

      if (gender === Ivrita.ORIGINAL) {
        newVal = original;
      } else if (gender === Ivrita.NEUTRAL && !original.includes('{') && !original.includes('[')) {
        newVal = original;
      } else {
        newVal = Ivrita.genderize(original, gender);
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
          (node.textContent.trim().length > 0 && separatorRegex.test(node.textContent))
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP),
      },
    );

    // eslint-disable-next-line no-cond-assign
    while ((currentNode = walk.nextNode())) {
      this.relevantNodes.push([currentNode, currentNode.data]);
    }
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
        case Ivrita.FEMALE:
          replacement = female;
          break;

        case Ivrita.MALE:
          replacement = male;
          break;

        case Ivrita.NEUTRAL:
        default:
          if (neutral) replacement = neutral;
          else replacement = `${male}/${female}`;
          break;
      }
      genderized = genderized.replace(pattern, replacement);
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
