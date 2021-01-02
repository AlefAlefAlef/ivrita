import {
  MALE, FEMALE, NEUTRAL, ORIGINAL, GENDERS, genderize,
} from './ivrita';
import TextAttribute from './textAttribute';
import TextElement, { MALE_DATA_ATTR, FEMALE_DATA_ATTR, NEUTRAL_DATA_ATTR } from './textElement';
import TextNode from './textNode';
import TextObject from './textObject';
import { HEB, SYNTAX } from './utils/characters';

const hebrewRegex = new RegExp(HEB);
const ivritaSyntaxRegex = new RegExp(SYNTAX);

export default class IvritaElement {
  nodes = new Set();

  elements = [];

  mode;

  fontFeatureSettings;

  relavantAttributes = {
    'a, img, button, input': ['title'],
    [`input:not([type=${['submit', 'button', 'checkbox', 'radio', 'hidden', 'image', 'range', 'reset', 'file'].join(']):not([type=')}])`]: ['placeholder'],
    'input[type=submit], input[type=button], input[type=reset]': ['value'],
  };

  static EVENT_MODE_CHANGED = 'ivrita-mode-changed';

  static GENDERS = GENDERS;

  static MALE = MALE;

  static FEMALE = FEMALE;

  static NEUTRAL = NEUTRAL;

  static ORIGINAL = ORIGINAL;

  static instances = new Map();

  static defaultMode = NEUTRAL;

  // Exported for comfort
  static genderizeString = genderize;

  static textObjects = TextObject.instances;

  constructor(elem, mode) {
    if (typeof elem === 'undefined') {
      this.elements = [document.body];
      const titleTag = document.documentElement.querySelector('title');
      if (titleTag) {
        this.elements.push(titleTag);
      }
    } else if (elem instanceof Array && elem.filter((el) => el instanceof HTMLElement)) {
      this.elements = elem;
    } else if (elem instanceof NodeList) {
      this.elements = Array.from(elem);
    } else if (elem instanceof HTMLElement) {
      this.elements = [elem];
    } else if (typeof jQuery === 'function' && elem instanceof jQuery && typeof elem.toArray === 'function') {
      this.elements = elem.toArray();
    } else {
      throw new Error('Passed argument is not an HTMLElement.');
    }

    if (this.elements.length === 1 && this.constructor.instances.has(this.elements[0])) {
      const preExistingInstance = this.constructor.instances.get(this.elements[0]);
      preExistingInstance.registerTextObjects(this.elements[0]); // Make sure nodes are registered
      return preExistingInstance;
    }

    this.observer = new MutationObserver(this.onElementChange.bind(this));
    this.elements.forEach((el) => {
      this.observer.observe(el, {
        childList: true,
        subtree: true,
        characterData: false,
      });
      this.constructor.instances.set(el, this);
      this.registerTextObjects(el);
    });

    if (typeof mode !== 'undefined') {
      this.setMode(mode);
    } else if (this.constructor.defaultMode) {
      this.setMode(this.constructor.defaultMode);
    }
  }

  destroy() {
    this.setMode(ORIGINAL);
    this.setFontFeatureSettings(false);
    if (this.observer) {
      this.observer.disconnect();
    }
    this.nodes.clear();
    this.elements.forEach((el) => {
      this.constructor.instances.delete(el);
    });
  }

  static setDefaultMode(newMode) {
    this.defaultMode = newMode;
  }

  setMode(newMode = NEUTRAL) {
    if (newMode === NEUTRAL) {
      this.setFontFeatureSettings(true);
    } else if (this.mode === NEUTRAL) {
      this.setFontFeatureSettings(false);
    }

    if (!this.constructor.GENDERS.includes(newMode)) {
      return this;
    }
    this.mode = newMode;
    this.nodes.forEach((node) => node.setMode(newMode));

    this.dispatchModeChangedEvent(newMode);

    return this;
  }

  static setMode(newMode) {
    this.instances.forEach((instance) => instance.setMode(newMode));
  }

  dispatchModeChangedEvent(mode = this.mode) {
    this.elements.forEach(
      (el) => el.dispatchEvent(new CustomEvent(this.constructor.EVENT_MODE_CHANGED,
        { bubbles: true, detail: { mode } })),
    );
  }

  registerTextObjects(element) {
    this.registerTextNodes(element);
    this.registerTextAttributes(element);
  }

  registerTextNodes(element) {
    let currentNode;
    const walk = document.createTreeWalker(
      element,
      NodeFilter.SHOW_ELEMENT + NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => (this.constructor.acceptNodeFilter(node)),
      },
    );

    // eslint-disable-next-line no-cond-assign
    while ((currentNode = walk.nextNode())) {
      let newNode;
      if (currentNode instanceof Text) {
        newNode = new TextNode(currentNode);
      } else if (currentNode instanceof Element) {
        newNode = new TextElement(currentNode);
      }
      this.nodes.add(newNode);
    }
  }

  registerTextAttributes(element) {
    Object.entries(this.relavantAttributes).forEach(([selector, attributes]) => {
      Array.from(element.querySelectorAll(selector)).forEach((input) => {
        attributes.forEach((attrName) => {
          if (input.hasAttribute(attrName)) {
            this.nodes.add(new TextAttribute(input.getAttributeNode(attrName)));
          }
        });
      });
    });
  }

  static acceptNodeFilter(node) {
    if (TextObject.instances.has(node)) { // Already indexed, will be a pointer to existing node
      return NodeFilter.FILTER_ACCEPT;
    }

    if (node.textContent.trim().length <= 0) {
      return NodeFilter.FILTER_REJECT; // If there's no content, reject all child nodes
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.dataset.ivritaDisable) {
        return NodeFilter.FILTER_REJECT;
      }
      if ([MALE_DATA_ATTR, FEMALE_DATA_ATTR, NEUTRAL_DATA_ATTR]
        .filter((attr) => node.dataset[attr]).length) {
        return NodeFilter.FILTER_ACCEPT;
      }
    } else if (node.nodeType === Node.TEXT_NODE) {
      if (hebrewRegex.test(node.textContent) // Test for Hebrew Letters
      && ivritaSyntaxRegex.test(node.textContent)) {
        return NodeFilter.FILTER_ACCEPT;
      }
    }
    return NodeFilter.FILTER_SKIP;
  }

  onElementChange(mutationsList) {
    const closest = (el, s) => {
      do {
        if (el instanceof Element && Element.prototype.matches.call(el, s)) return el;
        // eslint-disable-next-line no-param-reassign
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };

    mutationsList.forEach((mutation) => {
      if (mutation.type === 'childList') {
        const added = Array.from(mutation.addedNodes);
        const removed = Array.from(mutation.removedNodes);
        if (added.length === removed.length) { // Probably just changed, not really removed
          removed.forEach((oldNode, i) => {
            if (oldNode.nodeType === Node.TEXT_NODE) {
              const newNode = added[i];
              if (TextNode.instances.has(oldNode) && newNode.nodeType === Node.TEXT_NODE) {
                const nodeObj = TextNode.instances.get(oldNode);
                nodeObj.node = newNode; // This is dangerous, make sure it makes sense
                TextNode.instances.set(newNode, nodeObj);
                TextNode.instances.delete(oldNode);
              }
            } // TODO: what about nodes with nested text nodes?
          });
        } else {
          added.forEach((node) => {
            if (closest(node, '[data-ivrita-disable]')) {
              return;
            }
            if (node.nodeType === Node.TEXT_NODE
              && this.constructor.acceptNodeFilter(node) === NodeFilter.FILTER_ACCEPT) {
              this.nodes.add(new TextNode(node));
            } else if (node.childNodes.length > 0) {
              this.registerTextNodes(node);
            }
          });
        }
      }
    });
  }

  setFontFeatureSettings(isActive) {
    this.fontFeatureSettings = isActive;
    this.elements.forEach((el) => {
      const originalFFS = el.style.fontFeatureSettings;
      let result = originalFFS.slice().replace('normal', '');

      if (isActive) {
        if (!result.includes('titl')) {
          if (result) { // Only add a space if property exists
            result += ', ';
          }
          result += '"titl"';
        }
      } else if (result.includes('titl')) {
        result = result.replace(/(, )?"?'?titl"?'?/, '');
      }

      if (!result) result = 'normal';

      el.style.fontFeatureSettings = result;
    });

    return this;
  }
}

if (typeof jQuery === 'function') {
  jQuery.fn.ivrita = function ivritajQueryFn(gender) {
    return new IvritaElement(this, gender);
  };
}
