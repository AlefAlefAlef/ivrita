import JSXComponent from 'jsx-render/lib/JSXComponent';
// eslint-disable-next-line no-unused-vars
import dom from 'jsx-render';

import './style.scss';
// import template from './template.jsx';

import Ivrita from '../element';

export default class IvritaSwitch extends JSXComponent {
  config = {
    position: 'left',
    iconTitle: 'Ivrita',
    aboutLinkText: 'About the Ivrita project',
    aboutLinkURL: 'https://alefalefalef.co.il/ivrita/',
    style: 1,
    logoIcon: '&#x26A5;&#xFE0E;',
    modes: {
      [Ivrita.MALE]: {
        label: 'Male',
        icon: '&#x2642;&#xFE0E;',
      },
      [Ivrita.FEMALE]: {
        label: 'Female',
        icon: '&#x2640;&#xFE0E;',
      },
      [Ivrita.NEUTRAL]: {
        label: 'Neutral',
        icon: '&#x26A5;&#xFE0E;',
      },
    },
    default: Ivrita.NEUTRAL,
  }

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

  setMode(modeStr) {
    const mode = parseInt(modeStr, 10);
    this.element.querySelectorAll('a.ivrita-mode-changer').forEach((e) => {
      if (parseInt(e.dataset.ivritaMode, 10) === mode) {
        e.classList.add('ivrita-active');
      } else {
        e.classList.remove('ivrita-active');
      }
    });
    this.element.querySelector(`a[data-ivrita-mode="${mode}"]`).classList.add('ivrita-active');
    this.ivritaInstances.forEach((i) => i.setMode(mode));

    window.localStorage.setItem('ivrita-mode', mode);
  }

  render() {
    return (
      <div class={`ivrita-switch ivrita-switch--${this.config.position}`}>
        <a href="#" class="ivrita-logo" title={ this.config.iconTitle } dangerouslySetInnerHTML={{ __html: this.config.logoIcon }}></a>
        {
          Object.keys(this.config.modes).map((mode) => (
            <a href="#"
              class={`ivrita-mode-changer ivrita-button ivrita-button-style-${this.config.style}`}
              data-ivrita-mode={ mode }
              title={ this.config.modes[mode].label }
              ref={ super.ref }
              onClick={ () => { this.setMode(mode); } }
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
