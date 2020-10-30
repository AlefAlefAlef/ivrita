import rules from './rules';

export default class Ivrita {
  static NEUTRAL = 0;

  static MALE = 1;

  static FEMALE = 2;

  relevantNodes = [];

  constructor(elem = document.body) {
    if (elem instanceof HTMLElement) {
      this.registerTextNodes(elem);
    } else {
      throw new Error(`Passed argument is not an HTMLElement. Did you mean: 'document.querySelector("${elem.toString()}")'?`);
    }
  }

  setMode(gender) {
    this.relevantNodes.forEach(([node, original]) => {
      let newVal;
      switch (gender) {
        case Ivrita.NEUTRAL:
          newVal = original;
          break;

        default:
          newVal = Ivrita.genderize(original, gender);
      }

      if (newVal !== node.data) {
        node.data = newVal;
      }
    });
  }

  registerTextNodes(element) {
    let currentNode;
    const walk = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => (
          (node.textContent.length > 0 && node.textContent.trim())
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP),
      },
    );

    // eslint-disable-next-line no-cond-assign
    while ((currentNode = walk.nextNode())) {
      this.relevantNodes.push([currentNode, currentNode.data]);
    }
  }

  static genderize(text, gender) {
    let genderized = text;
    rules.forEach(([pattern, male, female]) => {
      genderized = genderized.replace(pattern, gender === Ivrita.FEMALE ? female : male);
    });
    return genderized;
  }
}
