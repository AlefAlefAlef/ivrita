export default class CustomSwitch extends IvritaSwitch {
    /**
     * Generate a new switch with custom controls.
     * Your responsibility is to create an HTML element with buttons,
     * which all share a common selector and have the 'data-ivrita-mode'
     * attribute set to the mode they activate.
     *
     * Then, simply call this constructor with the wrapper of the buttons,
     * the buttons selector and an optional list of Ivrita instances this switch should control.
     * (If no instances are specified, the global 'window._ivrita' will be used)
     *
     * Example:
     *
     * ```html
     * <div id="ivrita">
     *   <div class="ivrita-toolbar-label">לשון פנייה:</div>
     *   <a href="#" class="ivrita-button" data-ivrita-mode="FEMALE" data-ivrita-icon="♀︎">אישה</a>
     *   <a href="#" class="ivrita-button" data-ivrita-mode="MALE" data-ivrita-icon="♂︎">זכר</a>
     * </div>
     *
     * <script>
     *   document.addEventListener('ivrita-ui-ready', function() {
     *     Ivrita.setDefaultMode(Ivrita.MALE);
     *     var toolbar = new Ivrita.ui.custom(document.getElementById('ivrita'), '.ivrita-button');
     *   });
     * </script>
     *
     * ```
     * @param {HTMLElement} element The wrapper of your custom switch
     * @param {string} buttonsSelector A DOM-selector which selects all the buttons of the switch
     * @param  {...Ivrita} ivritaInstances A list of Ivrita instances which this switch controls
     */
    constructor(element: HTMLElement, buttonsSelector: string, ...ivritaInstances: any[]);
    /**
     * A map between the buttons of this switch and the modes they represent
     * @type {Map<HTMLElement, Mode>}
     */
    buttons: Map<HTMLElement, Mode>;
    element: HTMLElement;
    buttonsSelector: string;
    listenForClicks(): void;
    listenForExternalChanges(): void;
    setActiveButton(newMode: any): void;
}
import IvritaSwitch from "./switch";
import { Mode } from "../ivrita";
