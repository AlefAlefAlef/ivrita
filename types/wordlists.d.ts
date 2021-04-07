/**
 * Custom word list of manual overrides
 *
 * @type {import('./rules').Rule[]}
 */
export const custom: import('./rules').Rule[];
/**
 * For most verbs (Unless found in *verbsFemaleKeepVav*), we follow the rules of:
 *
 * כתוב/י => Vav before last letter => Vav removed => כתבי
 *
 * else:
 *
 * לך/י => Yod added after original word => לכי
 *
 * However, some verbs need an aditional Yod before their last letter:
 *
 * הקשב => Add Yod before and after Bet => הקשיבי
 *
 * This is the list of words which need that extra Yod
 *
 * @type {string[]}
 */
export const verbsFemaleExtraYod: string[];
/**
 * @type {string[]}
 */
export const verbsFemaleKeepVav: string[];
/**
 * Most plurals don't need an extra Yod on their female form: מורים->מורות
 * These are the exceptions which need a Yod:
 *
 * @type {string[]}
 */
export const pluralsWithExtraYod: string[];
