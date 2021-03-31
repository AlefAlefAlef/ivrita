import Ivrita from '../element';
import CustomSwitch from './custom';
import DefaultSwitch from './default';

import DocReady from './docReady';

const defaultSwitch = new DefaultSwitch();

DocReady(() => {
  window._ivrita = new Ivrita();
  defaultSwitch.setIvritaInstances(window._ivrita);
  defaultSwitch.init();
});

defaultSwitch.custom = CustomSwitch;
export default defaultSwitch;
