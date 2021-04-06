export default class DefaultSwitch extends IvritaSwitch {
    /**
     * The switch configuration.
     *
     * The defaults are listed bellow, properties can be overridden by using
     * the `ivrita-ui-ready` event:
     *
     * ```
     * document.addEventListener('ivrita-ui-ready', function() {
     *   Ivrita.ui.default.config.modes[Ivrita.MALE].label = 'גבר';
     * });
     * ```
     */
    config: {
        position: string;
        iconTitle: string;
        aboutLinkText: string;
        aboutLinkURL: string;
        style: number;
        logoIcon: string;
        modes: {
            [x: number]: {
                label: string;
                icon: string;
                order: number;
            };
        };
        default: number;
    };
    render(): any;
    build(): void;
    element: any;
    init(): void;
    rebuild(): void;
}
import IvritaSwitch from "./switch";
