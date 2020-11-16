import { finals } from './finals';

export const SEP = '[\\\\/.]';
export const HEB = '[א-ת]';
export const EXTSEP = '[\\\\./—־-]';
export const G = '\'‎"”׳״'; // "Gershayim"
export const MAKAF = '—־-';
export const W = `[א-ת${G}]`;
export const FIN = `[${finals}]`;
export const B = `(?=^|$|\b|[^א-ת${G}?\u0590-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C7\u05EF-\u05F2\uFB2A-\uFB4F])`; // Boundary, like "\b" in regex. All unicode characters which can be part of a hebrew word

export const SYNTAX = [EXTSEP, '\\[', '\\{', '\\('].join('|');