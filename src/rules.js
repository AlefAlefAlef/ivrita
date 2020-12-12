import {
  SEP, NCB, G, W, FIN, B, HEB,
} from './utils/characters';

import {
  finnables, toFin, toNotFin,
} from './utils/finals';
import {
  custom, verbsFemaleExtraYod, verbsFemaleKeepVav, pluralsWithExtraYod,
} from './wordlists';

// Marks are used by early rules to specify a position in a text
// which should be addressed later by later rules.
// For example, M_WORDFIN marks an artificial end of a word,
// which was created by a rule (i.e. wasn't the end of the word in the original text)
// and this ending should be checked for final letters errors (מ=>ם).
const M_WORDFIN = '\u05c8'; // Not a real character
const M_NOT_WORDFIN = '\u05c9'; // Not a real character

const regexize = (p) => {
  p[0] = new RegExp(p[0], 'g');

  if (p[3] === true) {
    p[3] = `${p[1]}/${p[2]}`;
  }
  return p;
};

const matchAndNormalizeFemale = (word, addYod) => {
  const wordWithoutLastLetter = word.slice(0, word.length - 1);
  const lastLetter = word.slice(word.length - 1);
  let lastLetterMatcher = `(${lastLetter})`;
  if (finnables.includes(lastLetter)) {
    lastLetterMatcher = `(${toFin(lastLetter)}|${toNotFin(lastLetter)})`;
  }
  return [`${wordWithoutLastLetter}${lastLetterMatcher}${SEP}י${B}`, `${wordWithoutLastLetter}${toFin(lastLetter)}`, `${wordWithoutLastLetter}${addYod ? 'י' : ''}${toNotFin(lastLetter)}י`];
};

export default [
  // Whole Words
  ...custom,

  // הקשב/י => הקשב, הקשיבי
  ...verbsFemaleExtraYod.map((word) => matchAndNormalizeFemale(word, true)),

  // קום/י => קום, קומי
  ...verbsFemaleKeepVav.map((word) => matchAndNormalizeFemale(word, false)),

  // סטודנטים/ות => סטודנטים, סטודנטיות
  ...pluralsWithExtraYod.map((word) => {
    let targetWord = word;
    if (word.includes('(')) { // regex groups
      targetWord = word.replace(new RegExp('\\(.*?\\)'), '$2'); // TODO: support multiple groups
    }
    return [`(${NCB})${word}ים${SEP}י?ות${B}`, `$1${targetWord}ים`, `$1${targetWord}יות`];
  }),

  // Beginnings
  [`(${B})(${W}{0,3})י${SEP}ת(${W}{2,})`, '$1$2י$3', '$1$2ת$3'], // שי/תכתוב
  [`(${B})(${W}{0,3})ת${SEP}י(${W}{2,})`, '$1$2י$3', '$1$2ת$3'], // שת/יכתוב

  // Endings

  [`ו${SEP}ה${B}`, 'ו', 'ה'], // בגללה/ו
  [`ה${SEP}ו${B}`, 'ו', 'ה'], // בגללו/ה
  [`(${W})${SEP}ה${B}`, `$1${M_WORDFIN}`, `$1${M_NOT_WORDFIN}ה`], // חרוץ/ה
  [`(${W})ה?${SEP}תה${B}`, '$1ה', '$1תה'], // בכה/תה, רצ/תה
  [`(${W})יו${SEP}י?ה${B}`, '$1יו', '$1יה'], // מחקריו/יה
  [`(${W})ה${SEP}ית${B}`, '$1ה', '$1ית'], // מומחה/ית
  [`(${W})(ו?)י${SEP}ות${B}`, '$1$2י', '$1ות'], // מומחי/ות, שווי/ות
  [`(${W})ות${SEP}י${B}`, '$1י', '$1ות'], // מומחות/י
  [`(${W})${SEP}ית${B}`, `$1${M_WORDFIN}`, `$1${M_NOT_WORDFIN}ית`], // סטודנט/ית

  [`(${W})י${SEP}תי${B}`, '$1י', '$1תי'], // יקירי/תי

  [`(${W}{4,})אים${SEP}י?ות${B}`, '$1אים', '$1איות'], // ארגנטינאים/ות

  [`(${W})ווים${SEP}?ות${B}`, '$1ווים', '$1וות'], // שווים/ות
  [`(${W})וות${SEP}?ים${B}`, '$1ווים', '$1וות'], // שוות/ים
  [`(${W})(י)?ים${SEP}?(י)?ות${B}`, '$1$2ים', '$1$2$3ות'], // מורים/ות
  [`(${W})(י)?ות${SEP}י?ים${B}`, '$1$2ים', '$1$2ות'], // מורות/ים
  [`(${W})י${SEP}ות${B}`, '$1י', '$1ות'], // עורכי/ות

  [`(${W})ה${SEP}י${B}`, '$1ה', '$1י'], // ראה/י
  [`(${W}+)\\(י\\)(${W})${SEP}י${B}`, '$1$2', '$1י$2י'], // הפע(י)ל/י
  [`(${HEB})ו(${W})${SEP}י${B}`, '$1ו$2', `$1$2${M_NOT_WORDFIN}י`], // כתוב/י
  [`(${W})${SEP}י${B}`, `$1${M_WORDFIN}`, `$1${M_NOT_WORDFIN}י`], // לך/י

  [`(${W})(ה)?${SEP}ת${B}`, `$1$2${M_WORDFIN}`, `$1${M_NOT_WORDFIN}ת`], // נהג/ת, רואה/ת חשבון

  [`(${W})ם${SEP}?ן${B}`, '$1ם', '$1ן'], // אתם/ן
  [`(${W})ן${SEP}?ם${B}`, '$1ם', '$1ן'], // אתן/ם
  [`ה(${W}+)י(${W})ו${SEP}נה${B}`, 'ה$1י$2ו', 'ה$1$2נה'], // הלבישו/נה
  [`(${W}+)ו${SEP}ת(${W}+)נה${B}`, '$1ו', 'ת$2נה'], // יצאו/תצאנה
  [`ת(${W}+)ו${SEP}נה${B}`, 'ת$1ו', 'ת$1נה'], // תדרכו/נה
  [`(${W}+)ו${SEP}נה${B}`, '$1ו', '$1נה'], // רקדו/נה

  // Parentheses
  [`(${W}+)\\(([ותי]{1,3})\\)([יוהםן]{1,3})${B}`, '$1$3', '$1$2$3'], // מתנגד(ות)יו, מתנגד(ות)יהם
  [`(${W}+)י\\(י\\)(${W}*)(${FIN})${B}`, '$1י$2$3', '$1יי$2$3'], // פני(י)ך
  [`(${W}+)\\(י\\)י(${W}*)(${FIN})${B}`, '$1י$2$3', '$1יי$2$3'], // פנ(י)יך
  [`\\(א\\)נשים${B}`, 'אנשים', 'נשים'], // (א)נשים
  [`(${W}+)ב\\(ת\\)${B}`, '$1ב', '$1בת'], // חושב(ת)

  // Special Syntax
  ['\\[([^|]*?)\\|([^|]*?)\\|([^|]*?)\\]', '$1', '$2', '$3'], // [בן|בת|ילד]
  ['\\[([^|]*?)\\|([^|]*?)\\]', '$1', '$2', true], // [בן|בת]

  // Final Letters fixes
  [`ץ${M_NOT_WORDFIN}`, 'צ', 'צ'], // חרוץה
  [`ך${M_NOT_WORDFIN}`, 'כ', 'כ'], // משךי
  [`ן${M_NOT_WORDFIN}`, 'נ', 'נ'], // השעןי
  [`ם${M_NOT_WORDFIN}`, 'מ', 'מ'], // יזםית
  [`ף${M_NOT_WORDFIN}`, 'פ', 'פ'], // פילוסוףית

  [`([^${G}]+)צ${M_WORDFIN}`, '$1ץ', '$1ץ'], // חרוצ
  [`([^${G}]+)כ${M_WORDFIN}`, '$1ך', '$1ך'], // משוכ
  [`([^${G}]+)נ${M_WORDFIN}`, '$1ן', '$1ן'], // השענ
  [`([^${G}]+)מ${M_WORDFIN}`, '$1ם', '$1ם'], // יזמ
  [`([^${G}]+)פ${M_WORDFIN}`, '$1ף', '$1ף'], // פילוסופ

  // Remove marks
  [`[${M_WORDFIN}${M_NOT_WORDFIN}]`, '', ''],
].map(regexize);
