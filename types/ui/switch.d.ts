export default class IvritaSwitch {
    /**
     * The name of the event to be dispatched on `document` before reading the configuration
     */
    static EVENT_INIT: string;
    /**
     * @param  {...import('../element').default} ivritaInstances
     */
    constructor(...ivritaInstances: import('../element').default[]);
    /**
     * @type {import('../element').default[]}
     */
    ivritaInstances: import('../element').default[];
    /**
     * @param  {...import('../element').default} ivritaInstances
     */
    setIvritaInstances(...ivritaInstances: import('../element').default[]): void;
    /**
     * Sets the mode for all ivritaInstances of this switch
     * @param {import('../ivrita').Mode} mode The new mode
     */
    setMode(mode: import('../ivrita').Mode): void;
}
