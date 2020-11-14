export default class Node {
  node = {};

  originalText = '';

  currentMode = false;

  constructor(node) {
    if (!(node instanceof Node)) {
      return false;
    }

    this.node = node;
    this.originalText = node.textContent;
  }
}
