import Ivrita from '../element';
import CustomSwitch from './custom';
import DefaultSwitch from './default';

import DocReady from './docReady';

const defaultSwitch = new DefaultSwitch();

export const initDefaultSwitch = () => {
  window._ivrita = new Ivrita();
  defaultSwitch.setIvritaInstances(window._ivrita);
  defaultSwitch.init();
};

if (typeof document !== 'undefined') {
  DocReady(initDefaultSwitch);
}

defaultSwitch.custom = CustomSwitch;
export default defaultSwitch;
