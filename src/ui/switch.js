import JSXComponent from 'jsx-render/lib/JSXComponent';

export default class IvritaSwitch extends JSXComponent {
  /**
   * The name of the event to be dispatched on `document` before reading the configuration
   */
  static EVENT_INIT = 'ivrita-ui-ready';

  /**
   * @property {Ivrita[]} ivritaInstances
   */
  ivritaInstances = [];

  /**
   * @param  {...Ivrita} ivritaInstances
   */
  constructor(...ivritaInstances) {
    super();
    if (ivritaInstances.length) {
      this.setIvritaInstances(...ivritaInstances);
    }
  }

  /**
   * @param  {...Ivrita} ivritaInstances
   */
  setIvritaInstances(...ivritaInstances) {
    this.ivritaInstances = ivritaInstances;
  }

  /**
   * Sets the mode for all ivritaInstances of this switch
   * @param {string} modeStr The new mode
   */
  setMode(mode) {
    this.ivritaInstances.forEach((i) => i.setMode(mode));
    window.localStorage.setItem('ivrita-mode', mode);
  }

  build() {
    this.element = this.render();
  }

  init() {
    // Dispatch the event, in order to allow external reconfiguration
    document.dispatchEvent(new CustomEvent(this.constructor.EVENT_INIT, { bubbles: true }));

    this.build();
    document.body.appendChild(this.element);

    const storedMode = window.localStorage.getItem('ivrita-mode');
    if (storedMode) {
      this.setMode(storedMode);
    } else if (this.config.default) {
      this.setMode(this.config.default);
    }
  }

  rebuild() {
    this.element.remove();
    this.init();
  }
}
