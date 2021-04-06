export type Mode = number;
export namespace Mode {
    const ORIGINAL: number;
    const MALE: number;
    const FEMALE: number;
    const NEUTRAL: number;
}
export function genderize(originalText: string, newMode: Mode, doneFunc: any): string;
