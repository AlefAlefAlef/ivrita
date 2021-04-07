// @ts-check
import rules from './rules';

const PROTECTED = '__IVRITA_PROTECTED__';
const protectedRegexp = new RegExp(`\\{${PROTECTED}:(\\d+):${PROTECTED}\\}`, 'g');

/** @enum {number} */
export const Mode = {
  ORIGINAL: 0,
  MALE: 1,
  FEMALE: 2,
  NEUTRAL: 3,
};

/**
 * @param {string} originalText The original text, un-genderized
 * @param {Mode} newMode The new mode to genderize the string into
 * @param {(rules: import('./rules').BakedRule[]) => any} doneFunc
 * An optional callback to be executed after the genderization,
 * which will receive an array of matched rules
 */
export const genderize = (originalText, newMode, doneFunc) => {
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
  /**
   * @type {import('./rules').BakedRule[]}
   */
  const used = [];
  rules.forEach((rule) => {
    const [pattern, male, female, neutral] = rule;
    let replacement;
    switch (newMode) {
      case Mode.FEMALE:
        replacement = female;
        break;

      case Mode.MALE:
        replacement = male;
        break;

      case Mode.NEUTRAL:
      default:
        if (typeof neutral !== 'undefined') replacement = neutral;
        break;
    }
    if (replacement !== undefined) {
      genderized = genderized.replace(pattern, replacement);
    }

    if (typeof doneFunc === 'function' && prev !== genderized) {
      used.push(rule);
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

  if (typeof doneFunc === 'function') {
    doneFunc(used);
  }
  return genderized;
};
