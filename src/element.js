import {
  MALE, FEMALE, NEUTRAL, ORIGINAL, GENDERS,
} from './ivrita';
import TextNode from './node';
import { HEB, SYNTAX } from './utils/characters';

const hebrewRegex = new RegExp(HEB);
const ivritaSyntaxRegex = new RegExp(SYNTAX);

export default class IvritaElement {
  nodes = new Set();

  elements = [];

  mode;

  fontFeatureSettings;

  static EVENT_MODE_CHANGED = 'ivrita-mode-changed';

  static GENDERS = GENDERS;

  static MALE = MALE;

  static FEMALE = FEMALE;

  static NEUTRAL = NEUTRAL;

  static ORIGINAL = ORIGINAL;

  static instances = new Map();

  static defaultMode = NEUTRAL;

  constructor(elem = document.body, mode = null) {
    if (elem instanceof NodeList) {
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
      preExistingInstance.registerTextNodes(this.elements[0]); // Make sure all nodes are registered
      return preExistingInstance;
    }

    this.observer = new MutationObserver(this.onElementChange.bind(this));
    this.elements.forEach((el) => {
      this.observer.observe(el, {
        childList: true,
        subtree: true,
        characterData: true,
      });
      this.constructor.instances.set(el, this);
      this.registerTextNodes(el);
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

  registerTextNodes(element) {
    let currentNode;
    const walk = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => (this.constructor.acceptNodeFilter(node)
          ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP),
      },
    );

    // eslint-disable-next-line no-cond-assign
    while ((currentNode = walk.nextNode())) {
      this.nodes.add(new TextNode(currentNode));
    }
  }

  static acceptNodeFilter(node) {
    if (node.nodeType !== Node.TEXT_NODE) {
      return false;
    }

    // If the checks were aleady applied before, skip them
    if (TextNode.instances.has(node)) {
      return true;
    }

    return (node.textContent.trim().length > 0
      && hebrewRegex.test(node.textContent) // Test for Hebrew Letters
      && ivritaSyntaxRegex.test(node.textContent)); // Test for Ivrita Syntax;
  }

  onElementChange(mutationsList) {
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
            if (node.nodeType === Node.TEXT_NODE && this.constructor.acceptNodeFilter(node)) {
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
