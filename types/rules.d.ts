declare var _default: BakedRule[];
export default _default;
export type Rule = [pattern: string, male: string, female: string, neutral?: string];
export type BakedRule = [pattern: RegExp, male: string, female: string, neutral: string];
