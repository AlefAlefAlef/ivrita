export default class IvritaSwitch {
    /**
     * The name of the event to be dispatched on `document` before reading the configuration
     */
    static EVENT_INIT: string;
    /**
     * @param  {...Ivrita} ivritaInstances
     */
    constructor(...ivritaInstances: any[]);
    /**
     * @property {Ivrita[]} ivritaInstances
     */
    ivritaInstances: any[];
    /**
     * @param  {...Ivrita} ivritaInstances
     */
    setIvritaInstances(...ivritaInstances: any[]): void;
    /**
     * Sets the mode for all ivritaInstances of this switch
     * @param {string} modeStr The new mode
     */
    setMode(mode: any): void;
}
