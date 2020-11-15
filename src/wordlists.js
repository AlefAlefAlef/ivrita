import { G } from './utils/characters';

// For most verbs, we follow the rules of:
// כתוב/י => Vav before last letter => Vav removed => כתבי
// else:
// הקשב/י => Yod added => הקשיבי
// This is the list of words which should be excepted from those rules.
export const nonChangingVerbsFemale = [
  'רוץ',
  'עוף',
  'שוב',
  'טוס',
  'שוט',
  'קום',
  'שים',
  'ודא',
  'שלח',
  'לחץ',
  'בחר',
  'קרא',
  'לך',
  'קפוץ',
  'שתף',
  'תוכל',
];

// Most plurals don't need an extra Yod on their female form: מורים->מורות
// When the word ends with א, נ or ט, it usually needs one, so there's a rule for that.
// These are the exceptions which *do not* need an extra Yod:
export const pluralsWithoutExtraYod = [
  'גננ',
  'מאמנ',
  'מרא',
  'מלא',
  'מתרא',
  'מתרא',
  'רופא',
];

// And these are the exceptions which *do*:
export const pluralsWithExtraYod = [
  'יזמ',
  'מומח',
  'ישראל',
  'מצר',
  'אוסטרל',
  'אקדמ',
  'אדריכל',
  'ירושלמ',
  'תל אביב',
  'תל־אביב',
  'יהוד',
  'ערב',
  'אשכנז',
  'מזרח',
  'רוס',
  'ספרד',
  'סלאב',
  'צרפת',
  'ברב(א?)ר',
  'מלאכ',
  'היפסטר',
  'ס(א?)ח',
  `ח([${G}])כ`,
  `משת([${G}])פ`,
  `מנכ([${G}])ל`,
  `עו([${G}])ד`,
  `עו([${G}])ס`,
  `רו([${G}])ח`,
];
