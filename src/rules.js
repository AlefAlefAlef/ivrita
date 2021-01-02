import {
  SEP, G, W, FIN, B, HEB, LBPB,
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

// Unisex rules match always replace the same string, mode-ignorantly.
const unisex = (pattern, replacement) => [pattern, replacement, replacement, replacement];

const matchAndNormalizeVerb = (word, addYod) => {
  const wordWithoutLastLetter = word.slice(0, word.length - 1);
  const lastLetter = word.slice(word.length - 1);
  let lastLetterMatcher = `(${lastLetter})`;
  if (finnables.includes(lastLetter)) {
    lastLetterMatcher = `(${toFin(lastLetter)}|${toNotFin(lastLetter)})`;
  }

  const femaleBase = `${wordWithoutLastLetter}${addYod ? 'י' : ''}${toNotFin(lastLetter)}`;
  const male = `${wordWithoutLastLetter}${toFin(lastLetter)}`;
  return [
    [`${wordWithoutLastLetter}${lastLetterMatcher}${SEP}י${SEP}ו${B}`, male, `${femaleBase}י`, `${femaleBase}ו`],
    [`${wordWithoutLastLetter}${lastLetterMatcher}${SEP}י${B}`, male, `${femaleBase}י`],
  ];
};

export default [
  // Whole Words
  ...custom,

  // הקשב/י => הקשב, הקשיבי
  ...verbsFemaleExtraYod.reduce((r, word) => r.concat(matchAndNormalizeVerb(word, true)), []),

  // קום/י => קום, קומי
  ...verbsFemaleKeepVav.reduce((r, word) => r.concat(matchAndNormalizeVerb(word, false)), []),

  // סטודנטים/ות => סטודנטים, סטודנטיות
  ...pluralsWithExtraYod.map((word) => {
    let targetWord = word;
    if (word.includes('(')) { // regex groups
      targetWord = word.replace(new RegExp('\\(.*?\\)'), '$1'); // TODO: support multiple groups
    }
    return [`${LBPB}${word}ים${SEP}י?ות${B}`, `${targetWord}ים`, `${targetWord}יות`];
  }),

  // Beginnings
  [`${LBPB}(${W}{0,3})י${SEP}ת(${W}{2,})`, '$1י$2', '$1ת$2'], // שי/תכתוב
  [`${LBPB}(${W}{0,3})ת${SEP}י(${W}{2,})`, '$1י$2', '$1ת$2'], // שת/יכתוב

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
  [`(${W})וות${SEP}ים${B}`, '$1ווים', '$1וות'], // שוות/ים
  [`(${W})(י)?ים${SEP}?(י)?ות${B}`, '$1$2ים', '$1$2$3ות'], // מורים/ות
  [`(${W})(י)?ות${SEP}י?ים${B}`, '$1$2ים', '$1$2ות'], // מורות/ים
  [`(${W})י${SEP}ות${B}`, '$1י', '$1ות'], // עורכי/ות

  [`(${W})ה${SEP}י${SEP}ו${B}`, '$1ה', '$1י', '$1ו'], // ראה/י/ו
  [`(${W})ה${SEP}י${B}`, '$1ה', '$1י'], // ראה/י
  [`(${W})י${SEP}ה${SEP}ו${B}`, '$1ה', '$1י', '$1ו'], // ראי/ה/ו
  [`(${W})י${SEP}ה${B}`, '$1ה', '$1י'], // ראי/ה
  [`(${W}+)\\(י\\)(${W})${SEP}י${SEP}ו${B}`, '$1$2', '$1י$2י', '$1י$2ו'], // הפע(י)ל/י/ו
  [`(${W}+)\\(י\\)(${W})${SEP}י${B}`, '$1$2', '$1י$2י'], // הפע(י)ל/י
  [`(${HEB})ו(ו?)(${W})${SEP}י${SEP}ו${B}`, `$1$2ו$3${M_WORDFIN}`, `$1$2$2$3${M_NOT_WORDFIN}י`, `$1$2$3${M_NOT_WORDFIN}ו`], // כתוב/י/ו, דווח/י/ו
  [`(${HEB})ו(ו?)(${W})${SEP}י${B}`, `$1$2ו$3${M_WORDFIN}`, `$1$2$2$3${M_NOT_WORDFIN}י`], // כתוב/י, דווח/י
  [`(${W})${SEP}י${SEP}ו${B}`, `$1${M_WORDFIN}`, `$1${M_NOT_WORDFIN}י`, `$1${M_NOT_WORDFIN}ו`], // לך/י/ו
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
  [`(${W}+)(ך|כ)\\(([םן.\\/]{1,3})\\)${B}`, '$1ך', '$1ך', '$1כ$3'], // שלך(ם), שלך(ן)

  // Special Syntax
  ['\\[([^|]*?)\\|([^|]*?)\\|([^|]*?)\\]', '$1', '$2', '$3'], // [בן|בת|ילד]
  ['\\[([^|]*?)\\|([^|]*?)\\]', '$1', '$2', true], // [בן|בת]

  // Final Letters fixes
  unisex(`ץ${M_NOT_WORDFIN}`, 'צ'), // חרוץה
  unisex(`ך${M_NOT_WORDFIN}`, 'כ'), // משךי
  unisex(`ן${M_NOT_WORDFIN}`, 'נ'), // השעןי
  unisex(`ם${M_NOT_WORDFIN}`, 'מ'), // יזםית
  unisex(`ף${M_NOT_WORDFIN}`, 'פ'), // פילוסוףית

  unisex(`([^${G}]+)צ${M_WORDFIN}`, '$1ץ'), // חרוצ
  unisex(`([^${G}]+)כ${M_WORDFIN}`, '$1ך'), // משוכ
  unisex(`([^${G}]+)נ${M_WORDFIN}`, '$1ן'), // השענ
  unisex(`([^${G}]+)מ${M_WORDFIN}`, '$1ם'), // יזמ
  unisex(`([^${G}]+)פ${M_WORDFIN}`, '$1ף'), // פילוסופ

  // Remove marks
  unisex(`[${M_WORDFIN}${M_NOT_WORDFIN}]`, ''),
].map(regexize);
