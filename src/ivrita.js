import rules from './rules';

const PROTECTED = '__IVRITA_PROTECTED__';
const protectedRegexp = new RegExp(`\\{${PROTECTED}:(\\d+):${PROTECTED}\\}`, 'g');

export const ORIGINAL = 0;

export const MALE = 1;

export const FEMALE = 2;

export const NEUTRAL = 3;

export const GENDERS = [ORIGINAL, MALE, FEMALE, NEUTRAL];

export const genderize = (originalText, gender, doneFunc) => {
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
      case FEMALE:
        replacement = female;
        break;

      case MALE:
        replacement = male;
        break;

      case NEUTRAL:
      default:
        if (typeof neutral !== 'undefined') replacement = neutral;
        break;
    }
    if (replacement !== undefined) {
      genderized = genderized.replace(pattern, replacement);
    }

    if (typeof doneFunc === 'function' && prev !== genderized) {
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

  if (typeof doneFunc === 'function') {
    doneFunc(used);
  }
  return genderized;
};
