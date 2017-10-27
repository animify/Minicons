/* eslint no-console: "off" */

import iconFile from '../dist/minicons.json';
import Validator from './Validator';

export default class MiniconsHandler {
    /**
     * User-set options for overriding defaults
     * @param {Object} options Observe and config options
     */
    setOptions(options) {
        Validator.validateOptions(options, error => {
            if (!error) {
                options.config.props = Object.assign(this.config.props, options.config.props);
                this.config = options.config || this.config;
                this.canObserve = options.observe !== undefined ? options.observe : true;
            } else {
                console.log('%cMinicons:', 'font-weight: bold; text-decoration: underline;', `Oh oh! Something wrong when processing your options. ${error.message} [${error.type}]`);
            }
        });
    }

    /**
     * Finds an icon by name or alias
     * @param  {string} name The defined name of the Minicon
     * @return {object} The object of the icon
     */
    find(name) {
        return this.icons.find(icon => {
            const directName = icon.name === name;
            const aliasName = icon.aliases.includes(name);
            return directName || aliasName;
        });
    }

    /**
     * Creates an SVG Minicon element
     * @param  {string} name The defined name of the Minicon
     * @param  {object} props The props to be applied to the SVG element
     * @return {Element} The SVG element of the Minicon
     */
    create(name, props) {
        const propsArray = [];
        const iconObject = this.find(name);
        const mergedProps = Object.assign(props, this.defaultProps);

        if (!iconObject) return undefined;

        Object.keys(mergedProps).forEach(prop => {
            mergedProps[prop] && propsArray.push(`${prop}="${mergedProps[prop]}"`);
        });

        const iconString = `<svg ${propsArray.join(' ')}>${iconObject.content}</svg>`;
        const iconSvg = new DOMParser().parseFromString(iconString, 'image/svg+xml');
        const svg = iconSvg.querySelector('svg');

        if (iconObject.hasOwnProperty('fillTag')) {
            let fillableTags = svg.getElementsByTagName(iconObject.fillTag);
            fillableTags = Array.prototype.slice.call(fillableTags);
            fillableTags.forEach(element => {
                element.setAttribute('fill', mergedProps.stroke);
                element.setAttribute('stroke-width', 0);
            });
        }

        return svg;
    }

    /**
     * Gathers all [data-minicon] elements
     * and swaps them into Minicons
     */
    swap() {
        const iconElements = document.querySelectorAll('[data-minicon]');
        iconElements.forEach(icon => this.swapElement(icon));

        if (this.firstRun) {
            this.canObserve && this.setObserver();
            this.firstRun = false;
        }
    }

    /**
     * Swaps the DOM element with a Minicon
     * @param {Element} node The element that is to be switched
     */
    swapElement(element) {
        const iconProps = Object.assign(this.config.props, {
            class: `${element.classList.value} minicon minicon-${element.dataset.minicon}`,
        });
        const iconSvg = this.create(element.dataset.minicon, iconProps);

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
     * Sets the default props and the icon JSON file/config
     */
    constructor() {
        this.firstRun = true;
        this.canObserve = true;
        this.config = iconFile.config;
        this.icons = iconFile.icons;
        this.defaultProps = {
            xmlns: 'http://www.w3.org/2000/svg',
        };
    }
}
