export default class CustomSwitch extends IvritaSwitch {
    constructor(element: any, buttonsSelector: any, ...ivritaInstances: any[]);
    buttons: Map<any, any>;
    element: any;
    buttonsSelector: any;
    listenForClicks(): void;
    listenForExternalChanges(): void;
    setActiveButton(newMode: any): void;
}
import IvritaSwitch from "./switch";
