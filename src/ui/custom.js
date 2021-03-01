// eslint-disable-next-line no-unused-vars
import dom from 'jsx-render';
import IvritaElement from '../element';
import { MALE, FEMALE, NEUTRAL } from '../ivrita';
import IvritaSwitch from './switch';

export default class CustomSwitch extends IvritaSwitch {
  buttons = new Map();

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
          btnMode = MALE;
          break;

        case 'FEMALE':
          btnMode = FEMALE;
          break;

        case 'NEUTRAL':
          btnMode = NEUTRAL;
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
