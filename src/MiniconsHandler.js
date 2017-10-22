import iconFile from '../dist/Minicons.json';

export default class MiniconsHandler {
    /**
     * Creates an SVG Minicon element
     * @param  {string} name The defined name of the Minicon
     * @param  {Object} props The props to be applied to the SVG element
     * @return {Element} The SVG element of the Minicon
     */
    create(name, props) {
        const propsArray = [];
        const iconObject = this.icons.find(icon => icon.name === name);
        const mergedProps = Object.assign(props, this.defaultProps);

        if (!iconObject) return undefined;

        Object.keys(mergedProps).forEach(prop => {
            mergedProps[prop] && propsArray.push(`${prop}="${mergedProps[prop]}"`);
        });

        const iconString = `<svg ${propsArray.join(' ')}>${iconObject.content}</svg>`;
        const iconSvg = new DOMParser().parseFromString(iconString, 'image/svg+xml');

        return iconSvg.querySelector('svg');
    }

    /**
     * Gathers all [data-minicon] elements
     * and swaps them into Minicons
     */
    swap() {
        const iconElements = document.querySelectorAll('[data-minicon]');
        iconElements.forEach(icon => this.swapElement(icon));
    }

    /**
     * Swaps the DOM element with a Minicon
     * @param {Element} node The element that is to be switched
     */
    swapElement(element) {
        const iconSvg = this.create(element.dataset.minicon, this.options.props);
        if (!iconSvg) return;

        element.parentNode.replaceChild(iconSvg, element);
    }

    /**
     * Observes for changes done in the body
     */
    async setObserver() {
        await this.watch(document.getElementsByTagName('body')[0]);
    }

    /**
     * Sets up a mutation observer
     * and checks if Minicon is added
     * @param  {Element} parent The parent element that is being watched
     * @return {Promise} Returns the mutation observer promise
     */
    watch(parent) {
        const observerConfig = {
            attributes: false,
            childList: true,
            characterData: false,
        };

        return new Promise(resolve => {
            new MutationObserver((mutations => {
                mutations.forEach(mutation => this.handleMutation(mutation));
                resolve(mutations);
            })).observe(parent, observerConfig);
        });
    }

    /**
     * Checks if mutation contains a minicon
     * and swaps the affected element
     * @param {Object} mutation The mutation object passed from the observer
     */
    handleMutation(mutation) {
        if (mutation.addedNodes.length === 0) return;

        const addedNode = mutation.addedNodes[0];
        const nodeName = addedNode.dataset && addedNode.dataset.minicon;
        nodeName && this.swapElement(addedNode);
    }

    /**
     * Sets the options to be used
     * and runs the observer
     * @param {Object} options User-set Minicon options
     */
    constructor(options) {
        this.defaultProps = {
            xmlns: 'http://www.w3.org/2000/svg',
        };
        this.icons = iconFile.icons;
        this.options = (options && options.config) || iconFile.config;
        this.canObserve = (options && options.observe) || true;
        this.canObserve && this.setObserver();
    }
}
