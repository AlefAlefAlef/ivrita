// eslint-disable-next-line no-unused-vars
import dom from 'jsx-render';
import IvritaElement from '../element';
import { Mode } from '../ivrita';
import IvritaSwitch from './switch';

export default class CustomSwitch extends IvritaSwitch {
  /**
   * A map between the buttons of this switch and the modes they represent
   * @type {Map<HTMLElement, Mode>}
   */
  buttons = new Map();

  /**
   * Generate a new switch with custom controls.
   * Your responsibility is to create an HTML element with buttons,
   * which all share a common selector and have the 'data-ivrita-mode'
   * attribute set to the mode they activate.
   *
   * Then, simply call this constructor with the wrapper of the buttons,
   * the buttons selector and an optional list of Ivrita instances this switch should control.
   * (If no instances are specified, the global 'window._ivrita' will be used)
   *
   * Example:
   *
   * ```html
   * <div id="ivrita">
   *   <div class="ivrita-toolbar-label">לשון פנייה:</div>
   *   <a href="#" class="ivrita-button" data-ivrita-mode="FEMALE" data-ivrita-icon="♀︎">אישה</a>
   *   <a href="#" class="ivrita-button" data-ivrita-mode="MALE" data-ivrita-icon="♂︎">זכר</a>
   * </div>
   *
   * <script>
   *   document.addEventListener('ivrita-ui-ready', function() {
   *     Ivrita.setDefaultMode(Ivrita.MALE);
   *     var toolbar = new Ivrita.ui.custom(document.getElementById('ivrita'), '.ivrita-button');
   *   });
   * </script>
   *
   * ```
   * @param {HTMLElement} element The wrapper of your custom switch
   * @param {string} buttonsSelector A DOM-selector which selects all the buttons of the switch
   * @param  {...Ivrita} ivritaInstances A list of Ivrita instances which this switch controls
   */
  constructor(element, buttonsSelector, ...ivritaInstances) {
    if (ivritaInstances.length === 0 && typeof window._ivrita !== 'undefined') {
      super(window._ivrita);
    } else {
      super(...ivritaInstances);
    }

    this.element = element;
    this.buttonsSelector = buttonsSelector;

    this.listenForClicks();
    this.listenForExternalChanges();
  }

  listenForClicks() {
    Array.from(this.element.querySelectorAll(this.buttonsSelector)).forEach((button) => {
      const btnModeStr = button.dataset.ivritaMode;
      let btnMode;
      switch (btnModeStr.toUpperCase()) {
        case 'MALE':
          btnMode = Mode.MALE;
          break;

        case 'FEMALE':
          btnMode = Mode.FEMALE;
          break;

        case 'NEUTRAL':
          btnMode = Mode.NEUTRAL;
          break;

        default:
          btnMode = null;
      }

      if (btnMode !== null) {
        button.addEventListener('click', (e) => {
          e.preventDefault();

          this.setMode(btnMode);
          this.setActiveButton(btnMode);
        });

        this.buttons.set(button, btnMode);
      }
    });
  }

  listenForExternalChanges() {
    this.ivritaInstances.forEach((ivritaInstance) => {
      if (ivritaInstance.elements.length) {
        ivritaInstance.elements[0].addEventListener(IvritaElement.EVENT_MODE_CHANGED,
          ({ detail: { mode, firingInstance } }) => {
            if (firingInstance === ivritaInstance) { // Skip events bubbled by other instances
              this.setActiveButton(mode);
            }
          });
      }
    });
  }

  setActiveButton(newMode) {
    this.buttons.forEach((value, btn) => {
      if (newMode === value) {
        btn.classList.add('ivrita-active');
      } else {
        btn.classList.remove('ivrita-active');
      }
    });
  }
}
