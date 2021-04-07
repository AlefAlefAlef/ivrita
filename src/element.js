// @ts-check
import {
  Mode, genderize,
} from './ivrita';
import TextAttribute from './textAttribute';
import TextElement, { DataAttr } from './textElement';
import TextNode from './textNode';
import TextObject from './textObject';
import { HEB, SYNTAX } from './utils/characters';

const hebrewRegex = new RegExp(HEB);
const ivritaSyntaxRegex = new RegExp(SYNTAX);

export default class IvritaElement {
  /**
   * This is the name of the event which will be fired when the ivrita mode changes.
   * The event will fire on each and every element connected to this Ivrita instance.
   */
  static EVENT_MODE_CHANGED = 'ivrita-mode-changed';

  /**
   * These are just references to other variables, for exportability.
   */

  /**
   * A map between an Ivrita Mode and the corresponding 'data-' overriding attribute name (exported)
   */
  static DataAttrs = DataAttr;

  /**
   * A map of all the TextObject instances on this page, mapped by all of their TextNodes (exported)
   */
  static textObjects = TextObject.instances;

  /**
   * The genderize function from the Ivrita core (exported)
   */
  static genderize = genderize;

  static ORIGINAL = Mode.ORIGINAL;
  static MALE = Mode.MALE;
  static FEMALE = Mode.FEMALE;
  static NEUTRAL = Mode.NEUTRAL;

  // MULTI is a special with FFS enabled, but is essentialy the NEUTRAL mode.
  static MULTI = Object.keys(Mode).length;

  /**
   * A list of all valid modes
   */
  static GENDERS = [...Object.values(Mode), IvritaElement.MULTI];

  /**
   * A (static) map of all the Ivrita instances on this page, mapped by all of their elements
   * @type {Map<Node, IvritaElement>}
   */
  static instances = new Map();

  /**
   * The default mode for all new ivrita instances (unless a mode is passed to the constructor)
   */
  static defaultMode = Mode.NEUTRAL;

  /**
   * A set of all the Ivrita TextObjects this instance tracks
   * @type {Set<TextObject>}
   */
  nodes = new Set();

  /**
   * An array of all the elements this instance tracks (the elements passed to its construtor)
   * @type {Node[]}
   */
  elements = [];

  /**
   * The current mode of this Ivrita instance
   * @type {Mode}
   */
  mode;

  /**
   * Whether or not 'font-feature-setting' is set to 'titl' for this Ivrita instance
   * @type {boolean}
   */
  fontFeatureSettings;

  /**
   * A map between DOM selectors to all their possible attributes which need to be genderized
   * @type {{[domSelector: string]: string[]}}
  */
  relavantAttributes = {
    'a, img, button, input': ['title'],
    [`input:not([type=${['submit', 'button', 'checkbox', 'radio', 'hidden', 'image', 'range', 'reset', 'file'].join(']):not([type=')}])`]: ['placeholder'],
    'input[type=submit], input[type=button], input[type=reset]': ['value'],
  };

  /**
   * Construct a new Ivrita instance.
   * @param {Iterable<Node>|JQuery} [elem] The element (or elements) which need to be genderized
   * @param {Mode} [mode] The initial mode to start with
   */
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
    // @ts-ignore
    } else if (typeof jQuery === 'function' && elem instanceof jQuery && typeof elem.toArray === 'function') {
      // @ts-ignore
      this.elements = elem.toArray();
    } else {
      throw new Error('Passed argument is not an HTMLElement.');
    }

    if (this.elements.length === 1 && IvritaElement.instances.has(this.elements[0])) {
      const preExistingInstance = IvritaElement.instances.get(this.elements[0]);
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
      IvritaElement.instances.set(el, this);
      this.registerTextObjects(el);
    });

    if (typeof mode !== 'undefined') {
      this.setMode(mode);
    } else if (IvritaElement.defaultMode) {
      this.setMode(IvritaElement.defaultMode);
    }
  }

  /**
   * Disable this Ivrita instance and return everything to its original state
   */
  destroy() {
    this.setMode(Mode.ORIGINAL);
    this.setFontFeatureSettings(false);
    if (this.observer) {
      this.observer.disconnect();
    }
    this.nodes.clear();
    this.elements.forEach((el) => {
      IvritaElement.instances.delete(el);
    });
  }

  /**
   * @param {Mode} newMode
   */
  static setDefaultMode(newMode) {
    this.defaultMode = newMode;
  }

  /**
   * Change the mode of this ivrita instance and genderize all the strings accordingly
   * @param {Mode} newMode The new mode to change into
   */
  setMode(newMode = Mode.NEUTRAL) {
    if (!IvritaElement.GENDERS.includes(newMode)) {
      return this;
    }

    if ((this.mode === IvritaElement.MULTI && newMode !== IvritaElement.MULTI)
        || (this.mode !== IvritaElement.MULTI && newMode === IvritaElement.MULTI)) {
      this.setFontFeatureSettings(newMode === IvritaElement.MULTI);
    }

    this.mode = newMode;
    // If the new mode is MULTI, mask it from the child nodes - for them it's a NEUTRAL mode.
    this.nodes.forEach(
      (node) => node.setMode(newMode === IvritaElement.MULTI ? Mode.NEUTRAL : newMode),
    );

    this.dispatchModeChangedEvent(newMode);

    return this;
  }

  /**
   * Set the mode for all Ivrita instances on this page
   * @param {number} newMode
   */
  static setMode(newMode) {
    this.instances.forEach((instance) => instance.setMode(newMode));
  }

  /**
   * Genderize a string with the current mode of this Ivrita instance
   * @param {any} text
   */
  genderize(text) {
    return IvritaElement.genderize(text, this.mode);
  }

  /**
   * Fire the mode-changed event on all of this instance's events
   * @param {Mode} mode The new mode
   */
  dispatchModeChangedEvent(mode = this.mode) {
    this.elements.forEach(
      (el) => el.dispatchEvent(new CustomEvent(IvritaElement.EVENT_MODE_CHANGED,
        { bubbles: true, detail: { mode, firingInstance: this } })),
    );
  }

  /**
   * @param {Node} element
   */
  registerTextObjects(element) {
    this.registerTextNodes(element);
    if (element instanceof Element) {
      this.registerTextAttributes(element);
    }
  }

  /**
   * @param {Node} element
   */
  registerTextNodes(element) {
    let currentNode;
    const walk = document.createTreeWalker(
      element,
      NodeFilter.SHOW_ELEMENT + NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => (IvritaElement.acceptNodeFilter(node)),
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
      // Set the new node's mode to the current mode, to get in line with everything else
      if (this.mode) {
        newNode.setMode(this.mode);
      }
    }
  }

  /**
   * @param {Element} element
   */
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

  /**
   * @param {Text|Node} node
   */
  static acceptNodeFilter(node) {
    // Already indexed, will be a pointer to existing node
    if (node instanceof Text && TextObject.instances.has(node)) {
      return NodeFilter.FILTER_ACCEPT;
    }

    if (node.textContent.trim().length <= 0) {
      return NodeFilter.FILTER_REJECT; // If there's no content, reject all child nodes
    }

    if (node instanceof HTMLElement) {
      if (node.dataset.ivritaDisable) {
        return NodeFilter.FILTER_REJECT;
      }
      if (Object.values(DataAttr)
        .filter((attr) => node.dataset[attr]).length) {
        return NodeFilter.FILTER_ACCEPT;
      }
    } else if (node instanceof Text) {
      if (hebrewRegex.test(node.textContent) // Test for Hebrew Letters
      && ivritaSyntaxRegex.test(node.textContent)) {
        return NodeFilter.FILTER_ACCEPT;
      }
    }
    return NodeFilter.FILTER_SKIP;
  }

  /**
   * @param {MutationRecord[]} mutationsList
   */
  onElementChange(mutationsList) {
    /**
     * A polyfill for jQuery.closest(),
     * which starts from an element and searches for the closest parent which matches a selector
     * @param {Node} el The element to begin the search from
     * @param {string} s The selector to look for
     * @returns {Node|null}
     */
    const closest = (el, s) => {
      do {
        if (el instanceof Element && Element.prototype.matches.call(el, s)) return el;
        // eslint-disable-next-line no-param-reassign
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === Node.ELEMENT_NODE);
      return null;
    };

    mutationsList.forEach((mutation) => {
      if (mutation.type === 'childList') {
        const added = Array.from(mutation.addedNodes);
        const removed = Array.from(mutation.removedNodes);
        if (added.length === removed.length) { // Probably just changed, not really removed
          removed.forEach((oldNode, i) => {
            if (oldNode instanceof Text) {
              const newNode = added[i];
              if (TextNode.instances.has(oldNode) && newNode instanceof Text) {
                const nodeObj = TextNode.instances.get(oldNode);
                if (nodeObj instanceof TextNode) {
                  nodeObj.node = newNode; // This is dangerous, make sure it makes sense
                }
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
            if (node instanceof Text
              && IvritaElement.acceptNodeFilter(node) === NodeFilter.FILTER_ACCEPT) {
              const ivritaTextNode = new TextNode(node);
              this.nodes.add(ivritaTextNode);
              // Set the new node's mode to the current mode, to get in line with everything else
              if (this.mode) {
                ivritaTextNode.setMode(this.mode);
              }
            } else if (node.childNodes.length > 0) {
              this.registerTextNodes(node);
            }
          });
        }
      }
    });
  }

  /**
   * Turn on/off the "multi" feature
   * @param {boolean} isActive
   */
  setFontFeatureSettings(isActive) {
    this.fontFeatureSettings = isActive;
    this.elements.forEach((el) => {
      if (!(el instanceof HTMLElement)) return;
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
  // @ts-ignore
  jQuery.fn.ivrita = function ivritajQueryFn(/** @type {Mode} */ gender) {
    return new IvritaElement(this, gender);
  };
}
