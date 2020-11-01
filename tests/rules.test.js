import Ivrita from '../src/ivrita';

test('All separators', () => {
  expect(Ivrita.genderize('את/ה', Ivrita.MALE)).toBe('אתה');
  expect(Ivrita.genderize('את.ה', Ivrita.MALE)).toBe('אתה');
  expect(Ivrita.genderize('את\\ה', Ivrita.MALE)).toBe('אתה');
});

test('Word endings', () => {
  // Commandings
  expect(Ivrita.genderize('הקשב/י', Ivrita.FEMALE)).toBe('הקשיבי');
  expect(Ivrita.genderize('הקשב/י', Ivrita.MALE)).toBe('הקשב');

  expect(Ivrita.genderize('הפעל/י', Ivrita.FEMALE)).toBe('הפעילי');
  expect(Ivrita.genderize('הפעל/י', Ivrita.MALE)).toBe('הפעל');

  expect(Ivrita.genderize('השב/י', Ivrita.FEMALE)).toBe('השיבי');
  expect(Ivrita.genderize('השב/י', Ivrita.MALE)).toBe('השב');

  expect(Ivrita.genderize('הרם/י', Ivrita.FEMALE)).toBe('הרימי');
  expect(Ivrita.genderize('הרם/י', Ivrita.MALE)).toBe('הרם');

  expect(Ivrita.genderize('הרמ/י', Ivrita.FEMALE)).toBe('הרימי');
  expect(Ivrita.genderize('הרמ/י', Ivrita.MALE)).toBe('הרם');

  expect(Ivrita.genderize('הדגם/י', Ivrita.FEMALE)).toBe('הדגימי');
  expect(Ivrita.genderize('הדגם/י', Ivrita.MALE)).toBe('הדגם');

  expect(Ivrita.genderize('הקשב/י', Ivrita.FEMALE)).toBe('הקשיבי');
  expect(Ivrita.genderize('הקשב/י', Ivrita.MALE)).toBe('הקשב');

  expect(Ivrita.genderize('הלבש/י', Ivrita.FEMALE)).toBe('הלבישי');
  expect(Ivrita.genderize('הלבש/י', Ivrita.MALE)).toBe('הלבש');

  expect(Ivrita.genderize('הרבצ/י', Ivrita.FEMALE)).toBe('הרביצי');
  expect(Ivrita.genderize('הרבצ/י', Ivrita.MALE)).toBe('הרבץ');

  expect(Ivrita.genderize('צפה/י', Ivrita.FEMALE)).toBe('צפי');
  expect(Ivrita.genderize('צפה/י', Ivrita.MALE)).toBe('צפה');

  expect(Ivrita.genderize('שלח/י', Ivrita.FEMALE)).toBe('שלחי');
  expect(Ivrita.genderize('שלח/י', Ivrita.MALE)).toBe('שלח');

  expect(Ivrita.genderize('צאו/נה', Ivrita.FEMALE)).toBe('צאונה');
  expect(Ivrita.genderize('צאו/נה', Ivrita.MALE)).toBe('צאו');

  expect(Ivrita.genderize('צאו/תצאנה', Ivrita.FEMALE)).toBe('תצאנה');
  expect(Ivrita.genderize('צאו/תצאנה', Ivrita.MALE)).toBe('צאו');

  expect(Ivrita.genderize('יספרו/תספרנה', Ivrita.FEMALE)).toBe('תספרנה');
  expect(Ivrita.genderize('יספרו/תספרנה', Ivrita.MALE)).toBe('יספרו');

  // Third person
  expect(Ivrita.genderize('לו/ה', Ivrita.FEMALE)).toBe('לה');
  expect(Ivrita.genderize('לו/ה', Ivrita.MALE)).toBe('לו');
  expect(Ivrita.genderize('לה/ו', Ivrita.FEMALE)).toBe('לה');
  expect(Ivrita.genderize('לה/ו', Ivrita.MALE)).toBe('לו');
  expect(Ivrita.genderize('לו/לה', Ivrita.FEMALE)).toBe('לה');
  expect(Ivrita.genderize('לו/לה', Ivrita.MALE)).toBe('לו');
  expect(Ivrita.genderize('לה/לו', Ivrita.FEMALE)).toBe('לה');
  expect(Ivrita.genderize('לה/לו', Ivrita.MALE)).toBe('לו');

  expect(Ivrita.genderize('עשה/תה', Ivrita.FEMALE)).toBe('עשתה');
  expect(Ivrita.genderize('עשה/תה', Ivrita.MALE)).toBe('עשה');

  expect(Ivrita.genderize('הלווה/תה', Ivrita.FEMALE)).toBe('הלוותה');
  expect(Ivrita.genderize('הלווה/תה', Ivrita.MALE)).toBe('הלווה');

  expect(Ivrita.genderize('בכה/תה', Ivrita.FEMALE)).toBe('בכתה');
  expect(Ivrita.genderize('בכה/תה', Ivrita.MALE)).toBe('בכה');

  expect(Ivrita.genderize('יקירי/תי', Ivrita.FEMALE)).toBe('יקירתי');
  expect(Ivrita.genderize('יקירי/תי', Ivrita.MALE)).toBe('יקירי');

  expect(Ivrita.genderize('שלו/ה', Ivrita.FEMALE)).toBe('שלה');
  expect(Ivrita.genderize('שלו/ה', Ivrita.MALE)).toBe('שלו');

  expect(Ivrita.genderize('מחקריו/ה', Ivrita.FEMALE)).toBe('מחקריה');
  expect(Ivrita.genderize('מחקריו/ה', Ivrita.MALE)).toBe('מחקריו');
  expect(Ivrita.genderize('מחקריו/יה', Ivrita.FEMALE)).toBe('מחקריה');
  expect(Ivrita.genderize('מחקריו/יה', Ivrita.MALE)).toBe('מחקריו');

  expect(Ivrita.genderize('מועמדותו/ה', Ivrita.FEMALE)).toBe('מועמדותה');
  expect(Ivrita.genderize('מועמדותו/ה', Ivrita.MALE)).toBe('מועמדותו');

  expect(Ivrita.genderize('מועמדותן/ם', Ivrita.FEMALE)).toBe('מועמדותן');
  expect(Ivrita.genderize('מועמדותן/ם', Ivrita.MALE)).toBe('מועמדותם');

  expect(Ivrita.genderize('שלכם/ן', Ivrita.FEMALE)).toBe('שלכן');
  expect(Ivrita.genderize('שלכם/ן', Ivrita.MALE)).toBe('שלכם');
  expect(Ivrita.genderize('שלכן/ם', Ivrita.FEMALE)).toBe('שלכן');
  expect(Ivrita.genderize('שלכן/ם', Ivrita.MALE)).toBe('שלכם');

  expect(Ivrita.genderize('מחקריהם/ן', Ivrita.FEMALE)).toBe('מחקריהן');
  expect(Ivrita.genderize('מחקריהם/ן', Ivrita.MALE)).toBe('מחקריהם');
  expect(Ivrita.genderize('מחקריהן/ם', Ivrita.FEMALE)).toBe('מחקריהן');
  expect(Ivrita.genderize('מחקריהן/ם', Ivrita.MALE)).toBe('מחקריהם');

  expect(Ivrita.genderize('בגללו/ה', Ivrita.FEMALE)).toBe('בגללה');
  expect(Ivrita.genderize('בגללו/ה', Ivrita.MALE)).toBe('בגללו');

  expect(Ivrita.genderize('מינו/ה', Ivrita.FEMALE)).toBe('מינה');
  expect(Ivrita.genderize('מינו/ה', Ivrita.MALE)).toBe('מינו');

  expect(Ivrita.genderize('לגביו/ה', Ivrita.FEMALE)).toBe('לגביה');
  expect(Ivrita.genderize('לגביו/ה', Ivrita.MALE)).toBe('לגביו');

  // Singular
  expect(Ivrita.genderize('איש/ה', Ivrita.FEMALE)).toBe('אישה');
  expect(Ivrita.genderize('איש/ה', Ivrita.MALE)).toBe('איש');

  expect(Ivrita.genderize('חרוץ/ה', Ivrita.FEMALE)).toBe('חרוצה');
  expect(Ivrita.genderize('חרוץ/ה', Ivrita.MALE)).toBe('חרוץ');

  expect(Ivrita.genderize('גבוה/ה', Ivrita.FEMALE)).toBe('גבוהה');
  expect(Ivrita.genderize('גבוה/ה', Ivrita.MALE)).toBe('גבוה');

  expect(Ivrita.genderize('סטודנט/ית', Ivrita.FEMALE)).toBe('סטודנטית');
  expect(Ivrita.genderize('סטודנט/ית', Ivrita.MALE)).toBe('סטודנט');

  expect(Ivrita.genderize('יזמ/ית', Ivrita.FEMALE)).toBe('יזמית');
  expect(Ivrita.genderize('יזמ/ית', Ivrita.MALE)).toBe('יזם');
  expect(Ivrita.genderize('יזם/ית', Ivrita.FEMALE)).toBe('יזמית');
  expect(Ivrita.genderize('יזם/ית', Ivrita.MALE)).toBe('יזם');
  expect(Ivrita.genderize('יזמ/ת', Ivrita.FEMALE)).toBe('יזמת');
  expect(Ivrita.genderize('יזמ/ת', Ivrita.MALE)).toBe('יזם');
  expect(Ivrita.genderize('יזם/ת', Ivrita.FEMALE)).toBe('יזמת');
  expect(Ivrita.genderize('יזם/ת', Ivrita.MALE)).toBe('יזם');

  expect(Ivrita.genderize('מומחה/ית', Ivrita.FEMALE)).toBe('מומחית');
  expect(Ivrita.genderize('מומחה/ית', Ivrita.MALE)).toBe('מומחה');

  expect(Ivrita.genderize('חוקר/ת', Ivrita.FEMALE)).toBe('חוקרת');
  expect(Ivrita.genderize('חוקר/ת', Ivrita.MALE)).toBe('חוקר');

  expect(Ivrita.genderize('חבר/ה', Ivrita.FEMALE)).toBe('חברה');
  expect(Ivrita.genderize('חבר/ה', Ivrita.MALE)).toBe('חבר');

  expect(Ivrita.genderize('חבר/ת סגל', Ivrita.FEMALE)).toBe('חברת סגל');
  expect(Ivrita.genderize('חבר/ת סגל', Ivrita.MALE)).toBe('חבר סגל');

  expect(Ivrita.genderize('רואה/ת חשבון', Ivrita.FEMALE)).toBe('רואת חשבון');
  expect(Ivrita.genderize('רואה/ת חשבון', Ivrita.MALE)).toBe('רואה חשבון');

  expect(Ivrita.genderize('מנקה/ת בתים', Ivrita.FEMALE)).toBe('מנקת בתים');
  expect(Ivrita.genderize('מנקה/ת בתים', Ivrita.MALE)).toBe('מנקה בתים');

  expect(Ivrita.genderize('מורה פרטי/ת', Ivrita.FEMALE)).toBe('מורה פרטית');
  expect(Ivrita.genderize('מורה פרטי/ת', Ivrita.MALE)).toBe('מורה פרטי');

  expect(Ivrita.genderize('עוזר/ת אישי/ת', Ivrita.FEMALE)).toBe('עוזרת אישית');
  expect(Ivrita.genderize('עוזר/ת אישי/ת', Ivrita.MALE)).toBe('עוזר אישי');

  expect(Ivrita.genderize('מכונאי/ת', Ivrita.FEMALE)).toBe('מכונאית');
  expect(Ivrita.genderize('מכונאי/ת', Ivrita.MALE)).toBe('מכונאי');

  expect(Ivrita.genderize('שומר/ת', Ivrita.FEMALE)).toBe('שומרת');
  expect(Ivrita.genderize('שומר/ת', Ivrita.MALE)).toBe('שומר');

  expect(Ivrita.genderize('צלמ/ת', Ivrita.FEMALE)).toBe('צלמת');
  expect(Ivrita.genderize('צלמ/ת', Ivrita.MALE)).toBe('צלם');
  expect(Ivrita.genderize('צלם/ת', Ivrita.FEMALE)).toBe('צלמת');
  expect(Ivrita.genderize('צלם/ת', Ivrita.MALE)).toBe('צלם');

  expect(Ivrita.genderize('ישראלי/ת', Ivrita.FEMALE)).toBe('ישראלית');
  expect(Ivrita.genderize('ישראלי/ת', Ivrita.MALE)).toBe('ישראלי');

  expect(Ivrita.genderize('ארגנטינאי/ת', Ivrita.FEMALE)).toBe('ארגנטינאית');
  expect(Ivrita.genderize('ארגנטינאי/ת', Ivrita.MALE)).toBe('ארגנטינאי');

  expect(Ivrita.genderize('צרפתי/ת', Ivrita.FEMALE)).toBe('צרפתית');
  expect(Ivrita.genderize('צרפתי/ת', Ivrita.MALE)).toBe('צרפתי');

  expect(Ivrita.genderize('ברברי/ת', Ivrita.FEMALE)).toBe('ברברית');
  expect(Ivrita.genderize('ברברי/ת', Ivrita.MALE)).toBe('ברברי');
  expect(Ivrita.genderize('ברבארי/ת', Ivrita.FEMALE)).toBe('ברבארית');
  expect(Ivrita.genderize('ברבארי/ת', Ivrita.MALE)).toBe('ברבארי');

  expect(Ivrita.genderize('יהודי/ת', Ivrita.FEMALE)).toBe('יהודית');
  expect(Ivrita.genderize('יהודי/ת', Ivrita.MALE)).toBe('יהודי');
  expect(Ivrita.genderize('יהודי/ה', Ivrita.FEMALE)).toBe('יהודיה');
  expect(Ivrita.genderize('יהודי/ה', Ivrita.MALE)).toBe('יהודי');

  // Plural
  expect(Ivrita.genderize('חיים/ות', Ivrita.FEMALE)).toBe('חיות');
  expect(Ivrita.genderize('חיים/ות', Ivrita.MALE)).toBe('חיים');

  expect(Ivrita.genderize('טריים/ות', Ivrita.FEMALE)).toBe('טריות');
  expect(Ivrita.genderize('טריים/ות', Ivrita.MALE)).toBe('טריים');

  expect(Ivrita.genderize('פנויים/ות', Ivrita.FEMALE)).toBe('פנויות');
  expect(Ivrita.genderize('פנויים/ות', Ivrita.MALE)).toBe('פנויים');

  expect(Ivrita.genderize('סטודנטים/ות', Ivrita.FEMALE)).toBe('סטודנטיות');
  expect(Ivrita.genderize('סטודנטים/ות', Ivrita.MALE)).toBe('סטודנטים');
  expect(Ivrita.genderize('סטודנטים/יות', Ivrita.FEMALE)).toBe('סטודנטיות');
  expect(Ivrita.genderize('סטודנטים/יות', Ivrita.MALE)).toBe('סטודנטים');

  expect(Ivrita.genderize('מאסטרנטים/ות', Ivrita.FEMALE)).toBe('מאסטרנטיות');
  expect(Ivrita.genderize('מאסטרנטים/ות', Ivrita.MALE)).toBe('מאסטרנטים');

  expect(Ivrita.genderize('יזמים/ות', Ivrita.FEMALE)).toBe('יזמיות');
  expect(Ivrita.genderize('יזמים/ות', Ivrita.MALE)).toBe('יזמים');

  expect(Ivrita.genderize('מומחים/ות', Ivrita.FEMALE)).toBe('מומחיות');
  expect(Ivrita.genderize('מומחים/ות', Ivrita.MALE)).toBe('מומחים');

  expect(Ivrita.genderize('עורכים/ות', Ivrita.FEMALE)).toBe('עורכות');
  expect(Ivrita.genderize('עורכים/ות', Ivrita.MALE)).toBe('עורכים');

  expect(Ivrita.genderize('שופטים/ות', Ivrita.FEMALE)).toBe('שופטות');
  expect(Ivrita.genderize('שופטים/ות', Ivrita.MALE)).toBe('שופטים');

  expect(Ivrita.genderize('בעלות/י', Ivrita.FEMALE)).toBe('בעלות');
  expect(Ivrita.genderize('בעלות/י', Ivrita.MALE)).toBe('בעלי');
  expect(Ivrita.genderize('בעלי/ות', Ivrita.FEMALE)).toBe('בעלות');
  expect(Ivrita.genderize('בעלי/ות', Ivrita.MALE)).toBe('בעלי');
  expect(Ivrita.genderize('בעלים/ות', Ivrita.FEMALE)).toBe('בעלות');
  expect(Ivrita.genderize('בעלים/ות', Ivrita.MALE)).toBe('בעלים');

  expect(Ivrita.genderize('מעצבי/ות־על', Ivrita.FEMALE)).toBe('מעצבות־על');
  expect(Ivrita.genderize('מעצבי/ות־על', Ivrita.MALE)).toBe('מעצבי־על');

  expect(Ivrita.genderize('רואי/ות חשבון', Ivrita.FEMALE)).toBe('רואות חשבון');
  expect(Ivrita.genderize('רואי/ות חשבון', Ivrita.MALE)).toBe('רואי חשבון');

  expect(Ivrita.genderize('מנקי/ות בתים', Ivrita.FEMALE)).toBe('מנקות בתים');
  expect(Ivrita.genderize('מנקי/ות בתים', Ivrita.MALE)).toBe('מנקי בתים');

  expect(Ivrita.genderize('מורים/ות פרטיים/ות', Ivrita.FEMALE)).toBe('מורות פרטיות');
  expect(Ivrita.genderize('מורים/ות פרטיים/ות', Ivrita.MALE)).toBe('מורים פרטיים');

  expect(Ivrita.genderize('עוזרים/ות אישיים/ות', Ivrita.FEMALE)).toBe('עוזרות אישיות');
  expect(Ivrita.genderize('עוזרים/ות אישיים/ות', Ivrita.MALE)).toBe('עוזרים אישיים');

  expect(Ivrita.genderize('עוזרות/ים אישיות/ים', Ivrita.FEMALE)).toBe('עוזרות אישיות');
  expect(Ivrita.genderize('עוזרות/ים אישיות/ים', Ivrita.MALE)).toBe('עוזרים אישיים');

  expect(Ivrita.genderize('מכונאים/ות', Ivrita.FEMALE)).toBe('מכונאיות');
  expect(Ivrita.genderize('מכונאים/ות', Ivrita.MALE)).toBe('מכונאים');

  expect(Ivrita.genderize('שומרים/ות', Ivrita.FEMALE)).toBe('שומרות');
  expect(Ivrita.genderize('שומרים/ות', Ivrita.MALE)).toBe('שומרים');

  expect(Ivrita.genderize('צלמים/ות', Ivrita.FEMALE)).toBe('צלמות');
  expect(Ivrita.genderize('צלמים/ות', Ivrita.MALE)).toBe('צלמים');
  expect(Ivrita.genderize('צלמים/יות', Ivrita.FEMALE)).toBe('צלמיות');
  expect(Ivrita.genderize('צלמים/יות', Ivrita.MALE)).toBe('צלמים');

  expect(Ivrita.genderize('ישראלים/ות', Ivrita.FEMALE)).toBe('ישראליות');
  expect(Ivrita.genderize('ישראלים/ות', Ivrita.MALE)).toBe('ישראלים');
  expect(Ivrita.genderize('ישראליים/ות', Ivrita.FEMALE)).toBe('ישראליות');
  expect(Ivrita.genderize('ישראליים/ות', Ivrita.MALE)).toBe('ישראליים');

  expect(Ivrita.genderize('ארגנטינאים/ות', Ivrita.FEMALE)).toBe('ארגנטינאיות');
  expect(Ivrita.genderize('ארגנטינאים/ות', Ivrita.MALE)).toBe('ארגנטינאים');

  expect(Ivrita.genderize('צרפתים/ות', Ivrita.FEMALE)).toBe('צרפתיות');
  expect(Ivrita.genderize('צרפתים/ות', Ivrita.MALE)).toBe('צרפתים');

  expect(Ivrita.genderize('יהודים/ות', Ivrita.FEMALE)).toBe('יהודיות');
  expect(Ivrita.genderize('יהודים/ות', Ivrita.MALE)).toBe('יהודים');
  expect(Ivrita.genderize('יהודיים/ות', Ivrita.FEMALE)).toBe('יהודיות');
  expect(Ivrita.genderize('יהודיים/ות', Ivrita.MALE)).toBe('יהודיים');
});

test('Skip niqqud words', () => {
  expect(Ivrita.genderize('מעצּבֻּ/תֻ', Ivrita.FEMALE)).toBe('מעצּבֻּ/תֻ');
});

test('Word beginnings', () => {
  expect(Ivrita.genderize('י/תכתוב', Ivrita.FEMALE)).toBe('תכתוב');
  expect(Ivrita.genderize('י/תכתוב', Ivrita.MALE)).toBe('יכתוב');
  expect(Ivrita.genderize('שי/תכתוב', Ivrita.FEMALE)).toBe('שתכתוב');
  expect(Ivrita.genderize('שי/תכתוב', Ivrita.MALE)).toBe('שיכתוב');

  expect(Ivrita.genderize('י/תבוא', Ivrita.FEMALE)).toBe('תבוא');
  expect(Ivrita.genderize('י/תבוא', Ivrita.MALE)).toBe('יבוא');
  expect(Ivrita.genderize('ת/יבוא', Ivrita.FEMALE)).toBe('תבוא');
  expect(Ivrita.genderize('ת/יבוא', Ivrita.MALE)).toBe('יבוא');
});

test('Whole words', () => {
  expect(Ivrita.genderize('אנשי/ות עסקים', Ivrita.FEMALE)).toBe('נשות עסקים');
  expect(Ivrita.genderize('אנשי/ות עסקים', Ivrita.MALE)).toBe('אנשי עסקים');

  expect(Ivrita.genderize('א.נשים', Ivrita.FEMALE)).toBe('נשים');
  expect(Ivrita.genderize('א.נשים', Ivrita.MALE)).toBe('אנשים');

  expect(Ivrita.genderize('איש/אשת', Ivrita.FEMALE)).toBe('אשת');
  expect(Ivrita.genderize('איש/אשת', Ivrita.MALE)).toBe('איש');
  expect(Ivrita.genderize('אשת/איש', Ivrita.FEMALE)).toBe('אשת');
  expect(Ivrita.genderize('אשת/איש', Ivrita.MALE)).toBe('איש');

  // Female
  expect(Ivrita.genderize('רוצ/י', Ivrita.FEMALE)).toBe('רוצי');
  expect(Ivrita.genderize('רוצ/י', Ivrita.MALE)).toBe('רוץ');

  expect(Ivrita.genderize('קומ/י', Ivrita.FEMALE)).toBe('קומי');
  expect(Ivrita.genderize('קומ/י', Ivrita.MALE)).toBe('קום');

  expect(Ivrita.genderize('עופ/י', Ivrita.FEMALE)).toBe('עופי');
  expect(Ivrita.genderize('עופ/י', Ivrita.MALE)).toBe('עוף');

  expect(Ivrita.genderize('שים/י', Ivrita.FEMALE)).toBe('שימי');
  expect(Ivrita.genderize('שים/י', Ivrita.MALE)).toBe('שים');

  expect(Ivrita.genderize('אח/ות', Ivrita.FEMALE)).toBe('אחות');
  expect(Ivrita.genderize('אח/ות', Ivrita.MALE)).toBe('אח');

  expect(Ivrita.genderize('לו/לה, לה/לו', Ivrita.FEMALE)).toBe('לה, לה');
  expect(Ivrita.genderize('לו/לה, לה/לו', Ivrita.MALE)).toBe('לו, לו');

  expect(Ivrita.genderize('בן/בת, בת/בן', Ivrita.FEMALE)).toBe('בת, בת');
  expect(Ivrita.genderize('בן/בת, בת/בן', Ivrita.MALE)).toBe('בן, בן');

  expect(Ivrita.genderize('הוא/היא, היא/הוא', Ivrita.FEMALE)).toBe('היא, היא');
  expect(Ivrita.genderize('הוא/היא, היא/הוא', Ivrita.MALE)).toBe('הוא, הוא');

  expect(Ivrita.genderize('אנשי/ות', Ivrita.FEMALE)).toBe('נשות');
  expect(Ivrita.genderize('אנשי/ות', Ivrita.MALE)).toBe('אנשי');

  expect(Ivrita.genderize('מישהו/י', Ivrita.FEMALE)).toBe('מישהי');
  expect(Ivrita.genderize('מישהו/י', Ivrita.MALE)).toBe('מישהו');

  expect(Ivrita.genderize('אחד/ת, אחד/אחת, אחת/אחד', Ivrita.FEMALE)).toBe('אחת, אחת, אחת');
  expect(Ivrita.genderize('אחד/ת, אחד/אחת, אחת/אחד', Ivrita.MALE)).toBe('אחד, אחד, אחד');
});

test('Parentheses', () => {
  expect(Ivrita.genderize('מתנגד(ות)יו', Ivrita.FEMALE)).toBe('מתנגדותיו');
  expect(Ivrita.genderize('מתנגד(ות)יו', Ivrita.MALE)).toBe('מתנגדיו');

  expect(Ivrita.genderize('מתנגד(ות)יהן', Ivrita.FEMALE)).toBe('מתנגדותיהן');
  expect(Ivrita.genderize('מתנגד(ות)יהן', Ivrita.MALE)).toBe('מתנגדיהן');

  expect(Ivrita.genderize('מעריצ(ות)יו', Ivrita.FEMALE)).toBe('מעריצותיו');
  expect(Ivrita.genderize('מעריצ(ות)יו', Ivrita.MALE)).toBe('מעריציו');

  expect(Ivrita.genderize('חבר(ת)ו', Ivrita.FEMALE)).toBe('חברתו');
  expect(Ivrita.genderize('חבר(ת)ו', Ivrita.MALE)).toBe('חברו');

  expect(Ivrita.genderize('עלי(י)ך', Ivrita.FEMALE)).toBe('עלייך');
  expect(Ivrita.genderize('עלי(י)ך', Ivrita.MALE)).toBe('עליך');

  expect(Ivrita.genderize('פנ(י)יך', Ivrita.FEMALE)).toBe('פנייך');
  expect(Ivrita.genderize('פנ(י)יך', Ivrita.MALE)).toBe('פניך');

  expect(Ivrita.genderize('(א)נשים', Ivrita.FEMALE)).toBe('נשים');
  expect(Ivrita.genderize('(א)נשים', Ivrita.MALE)).toBe('אנשים');

  expect(Ivrita.genderize('חושב(ת)', Ivrita.FEMALE)).toBe('חושבת');
  expect(Ivrita.genderize('חושב(ת)', Ivrita.MALE)).toBe('חושב');
});

test('Special syntax', () => {
  expect(Ivrita.genderize('[בן|בת]', Ivrita.FEMALE)).toBe('בת');
  expect(Ivrita.genderize('[בן|בת]', Ivrita.MALE)).toBe('בן');
  expect(Ivrita.genderize('[בן|בת]', Ivrita.NEUTRAL)).toBe('בן/בת');

  expect(Ivrita.genderize('[נאה|יפה]', Ivrita.FEMALE)).toBe('יפה');
  expect(Ivrita.genderize('[נאה|יפה]', Ivrita.MALE)).toBe('נאה');

  expect(Ivrita.genderize('[חתיך|מהממת]', Ivrita.FEMALE)).toBe('מהממת');
  expect(Ivrita.genderize('[חתיך|מהממת]', Ivrita.MALE)).toBe('חתיך');

  expect(Ivrita.genderize('[בן|בת|ילד]', Ivrita.FEMALE)).toBe('בת');
  expect(Ivrita.genderize('[בן|בת|ילד]', Ivrita.MALE)).toBe('בן');
  expect(Ivrita.genderize('[בן|בת|ילד]', Ivrita.NEUTRAL)).toBe('ילד');
});

test('Unchanged', () => {
  expect(Ivrita.genderize('אבן/בתיאבון', Ivrita.FEMALE)).toBe('אבן/בתיאבון');
  expect(Ivrita.genderize('אבן/בתיאבון', Ivrita.MALE)).toBe('אבן/בתיאבון');

  expect(Ivrita.genderize('ו/או', Ivrita.FEMALE)).toBe('ו/או');
  expect(Ivrita.genderize('ו/או', Ivrita.MALE)).toBe('ו/או');

  expect(Ivrita.genderize('או/או', Ivrita.FEMALE)).toBe('או/או');
  expect(Ivrita.genderize('או/או', Ivrita.MALE)).toBe('או/או');

  expect(Ivrita.genderize('גבר/אישה', Ivrita.FEMALE)).toBe('גבר/אישה');
  expect(Ivrita.genderize('גבר/אישה', Ivrita.MALE)).toBe('גבר/אישה');

  expect(Ivrita.genderize('יספרו/נהרו', Ivrita.FEMALE)).toBe('יספרו/נהרו'); // unchanged
  expect(Ivrita.genderize('יספרו/נהרו', Ivrita.MALE)).toBe('יספרו/נהרו'); // unchanged

  expect(Ivrita.genderize('הלו/להבה', Ivrita.FEMALE)).toBe('הלו/להבה'); // unchanged
  expect(Ivrita.genderize('הלו/להבה', Ivrita.MALE)).toBe('הלו/להבה'); // unchanged

  expect(Ivrita.genderize('בכה/תהום/שלום', Ivrita.FEMALE)).toBe('בכה/תהום/שלום'); // unchanged
  expect(Ivrita.genderize('בכה/תהום/שלום', Ivrita.MALE)).toBe('בכה/תהום/שלום'); // unchanged

  expect(Ivrita.genderize('יזם/יתד', Ivrita.FEMALE)).toBe('יזם/יתד'); // unchanged
  expect(Ivrita.genderize('יזם/יתד', Ivrita.MALE)).toBe('יזם/יתד'); // unchanged

  expect(Ivrita.genderize('יזמים/יותר', Ivrita.FEMALE)).toBe('יזמים/יותר'); // unchanged
  expect(Ivrita.genderize('יזמים/יותר', Ivrita.MALE)).toBe('יזמים/יותר'); // unchanged

  expect(Ivrita.genderize('ים/הר', Ivrita.FEMALE)).toBe('ים/הר'); // unchanged
  expect(Ivrita.genderize('ים/הר', Ivrita.MALE)).toBe('ים/הר'); // unchanged

  expect(Ivrita.genderize('תפקיד/ים', Ivrita.FEMALE)).toBe('תפקיד/ים'); // unchanged
  expect(Ivrita.genderize('תפקיד/ים', Ivrita.MALE)).toBe('תפקיד/ים'); // unchanged

  expect(Ivrita.genderize('דרושים׳', Ivrita.FEMALE)).toBe('דרושים׳'); // unchanged
  expect(Ivrita.genderize('דרושים׳', Ivrita.MALE)).toBe('דרושים׳'); // unchanged

  expect(Ivrita.genderize('מע”מ', Ivrita.FEMALE)).toBe('מע”מ'); // unchanged
  expect(Ivrita.genderize('מע”מ', Ivrita.MALE)).toBe('מע”מ'); // unchanged

  expect(Ivrita.genderize('פ', Ivrita.FEMALE)).toBe('פ'); // unchanged
  expect(Ivrita.genderize('פ', Ivrita.MALE)).toBe('פ'); // unchanged
});
