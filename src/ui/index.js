import Ivrita from '../element';
import IvritaSwitch from './switch';

import DocReady from './docReady';

const switchInstance = new IvritaSwitch();

DocReady(() => {
  window._ivrita = new Ivrita();
  switchInstance.setIvritaInstances(window._ivrita);
  switchInstance.init();
});

export default switchInstance;
