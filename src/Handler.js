import iconFile from '../dist/Minicons.json';

export default class Handler {
    /**
     * Creates an SVG Minicon element
     * @param  {string} name The defined name of the Minicon
     * @param  {Object} props The props to be applied to the SVG element
     * @return {Element} The SVG element of the Minicon
     */
    create(name, props) {
        const propsArray = [];
        const iconObject = this.icons.find(ic => ic.name === name);
        const mergedProps = Object.assign(props, this.defaultProps);

        if (!iconObject) return undefined;

        Object.keys(mergedProps).forEach(prop => {
            mergedProps[prop] && propsArray.push(`${prop}="${mergedProps[prop]}"`);
        });

        const svg = `<svg ${propsArray.join(' ')}>${iconObject.content}</svg>`;
        const svgIcon = new DOMParser().parseFromString(svg, 'image/svg+xml');

        return svgIcon.querySelector('svg');
    }

    /**
     * Gathers all [data-minicon] elements
     * and swaps them into Minicons
     */
    swap() {
        const domIcons = document.querySelectorAll('[data-minicon]');
        domIcons.forEach(icon => this.swapElement(icon));
    }

    /**
     * Swaps the DOM element with a Minicon
     * @param {Element} node The element that is to be switched
     */
    swapElement(node) {
        const svgIcon = this.create(node.dataset.minicon, this.options.attributes);
        if (!svgIcon) return;

        node.parentNode.replaceChild(svgIcon, node);
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
     * @param  {Element} domNode The element that is being watched
     * @return {Promise} Returns the mutation observer
     */
    watch(domNode) {
        const observerConfig = {
            attributes: false,
            childList: true,
            characterData: false,
        };

        return new Promise(resolve => {
            new MutationObserver((mutations => {
                mutations.forEach(mutation => this.isMinicon(mutation));
                resolve(mutations);
            })).observe(domNode, observerConfig);
        });
    }

    /**
     * Checks if mutation contains a minicon
     * and swaps the affected element
     * @param {Object} mutation The mutation object passed from the observer
     */
    isMinicon(mutation) {
        if (mutation.addedNodes.length === 0) return;

        const addedNode = mutation.addedNodes[0];
        const isMinicon = addedNode.dataset && addedNode.dataset.minicon;
        isMinicon && this.swapElement(addedNode);
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
