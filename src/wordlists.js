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
];

// Most plurals don't need an extra Yod on their female form: מורים->מורות
// When the word ends with נ or ט, it usually needs one, so there's a rule for that.
// These are the exceptions which *do not* need an extra Yod:
export const pluralsWithoutExtraYod = ['גננ'];
// And these are the exceptions which *do*:
export const pluralsWithExtraYod = [
  'סטודנט',
  'יזמ',
  'מומח',
  'מכונא',
  'ישראל',
  'יהוד',
  'ערב',
  'אשכנז',
  'מזרח',
  'רוס',
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
];
