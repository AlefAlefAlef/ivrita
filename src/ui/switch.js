// @ts-check
import JSXComponent from 'jsx-render/lib/JSXComponent';

export default class IvritaSwitch extends JSXComponent {
  /**
   * The name of the event to be dispatched on `document` before reading the configuration
   */
  static EVENT_INIT = 'ivrita-ui-ready';

  /**
   * @type {import('../element').default[]}
   */
  ivritaInstances = [];

  /**
   * @param  {...import('../element').default} ivritaInstances
   */
  constructor(...ivritaInstances) {
    super();
    if (ivritaInstances.length) {
      this.setIvritaInstances(...ivritaInstances);
    }
  }

  /**
   * @param  {...import('../element').default} ivritaInstances
   */
  setIvritaInstances(...ivritaInstances) {
    this.ivritaInstances = ivritaInstances;
  }

  /**
   * Sets the mode for all ivritaInstances of this switch
   * @param {import('../ivrita').Mode} mode The new mode
   */
  setMode(mode) {
    this.ivritaInstances.forEach((i) => i.setMode(mode));
    window.localStorage.setItem('ivrita-mode', mode.toString());
  }
}
