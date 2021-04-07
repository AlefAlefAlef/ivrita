/**
 * *
 */
export type DataAttr = string;
/**
 * A map between an Ivrita Mode and the corresponding 'data-' overriding attribute name
 * @enum {string}
 * */
export const DataAttr: {
    [x: number]: string;
};
export default class TextElement extends TextObject {
    constructor(element: any);
    /**
     * @type {HTMLElement}
     */
    element: HTMLElement;
}
import TextObject from "./textObject";
