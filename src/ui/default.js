// eslint-disable-next-line no-unused-vars
import dom from 'jsx-render';
import {
  iconTitle,
  aboutLinkText,
  defaultMaleLabel,
  defaultFemaleLabel,
  defaultNeutralLabel,
} from './hebrew';

import './style.scss';

import Ivrita from '../element';
import IvritaSwitch from './switch';

export default class DefaultSwitch extends IvritaSwitch {
  /**
   * The switch configuration.
   *
   * The defaults are listed bellow, properties can be overridden by using
   * the `ivrita-ui-ready` event:
   *
   * ```
   * document.addEventListener('ivrita-ui-ready', function() {
   *   Ivrita.ui.default.config.modes[Ivrita.MALE].label = 'גבר';
   * });
   * ```
   */
  config = {
    position: 'left',
    iconTitle,
    aboutLinkText,
    aboutLinkURL: 'https://alefalefalef.co.il/ivrita/',
    style: 0,
    logoIcon: '&#x26A5;&#xFE0E;',
    modes: {
      [Ivrita.MALE]: {
        label: defaultMaleLabel,
        icon: '&#x2642;&#xFE0E;',
        order: 1,
      },
      [Ivrita.FEMALE]: {
        label: defaultFemaleLabel,
        icon: '&#x2640;&#xFE0E;',
        order: 2,
      },
      [Ivrita.NEUTRAL]: {
        label: defaultNeutralLabel,
        icon: '&#x26A5;&#xFE0E;',
        order: 3,
      },
    },
    default: Ivrita.NEUTRAL,
  }

  setMode(mode) {
    this.element.querySelectorAll('a.ivrita-mode-changer').forEach((e) => {
      if (parseInt(e.dataset.ivritaMode, 10) === mode) {
        e.classList.add('ivrita-active');
      } else {
        e.classList.remove('ivrita-active');
      }
    });
    this.element.querySelector(`a[data-ivrita-mode="${mode}"]`).classList.add('ivrita-active');

    super.setMode(mode);
  }

  render() {
    return (
      <div class={`ivrita-switch ivrita-switch--${this.config.position}`} tabindex="0" title={ this.config.iconTitle }>
        <a href="#" class="ivrita-logo" tabindex="-1" title={ this.config.iconTitle } dangerouslySetInnerHTML={{ __html: this.config.logoIcon }}></a>
        {
          Object.keys(this.config.modes)
            .sort((mode1, mode2) => this.config.modes[mode1].order - this.config.modes[mode2].order)
            .map((mode) => parseInt(mode, 10))
            .map((mode) => (
            <a href="#"
              class={`ivrita-mode-changer ivrita-button ivrita-button-style-${this.config.style}`}
              data-ivrita-mode={ mode }
              title={ this.config.modes[mode].label }
              ref={ super.ref }
              onClick={ (e) => { e.preventDefault(); this.setMode(mode); } }
              dangerouslySetInnerHTML={{ __html: this.config.modes[mode].icon }}
              ></a>
            ))
        }
        <a href={ this.config.aboutLinkURL } class="ivrita-info-link" title={ this.config.aboutLinkText } target="_blank">ⓘ</a>
      </div>
    );
  }

  build() {
    this.element = this.render();
  }

  init() {
    // Dispatch the event, in order to allow external reconfiguration
    document.dispatchEvent(new CustomEvent(this.constructor.EVENT_INIT, { bubbles: true }));

    this.build();
    document.body.appendChild(this.element);

    let storedMode = window.localStorage.getItem('ivrita-mode');
    if (!Number.isNaN(parseInt(storedMode, 10))) {
      storedMode = parseInt(storedMode, 10);
    }
    if (!Ivrita.GENDERS.includes(storedMode)) {
      if (Ivrita.GENDERS.includes(Ivrita[storedMode])) {
        storedMode = Ivrita[storedMode];
      } else {
        storedMode = Ivrita.defaultMode;
      }
    }
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
