import iconFile from '../dist/Minicons.json';

export default class Handler {
    create(name, props) {
        const propsArray = [];
        const iconObject = this.icons.find(ic => ic.name === name);
        const mergedProps = Object.assign(props, this.defaultProps);

        if (!iconObject) return undefined;

        Object.keys(mergedProps).forEach(prop => {
            mergedProps[prop] && propsArray.push(`${prop}="${mergedProps[prop]}"`)
        });

        const svg = `<svg ${propsArray.join(' ')}>${iconObject.content}</svg>`;
        const svgIcon = new DOMParser().parseFromString(svg, 'image/svg+xml');

        return svgIcon.querySelector('svg');
    }

    swap() {
        const domIcons = document.querySelectorAll('[data-minicon]');
        domIcons.forEach(icon => this.swapElement(icon));
    }

    swapElement(node) {
        const svgIcon = this.create(node.dataset.minicon, this.options.attributes);
        if (!svgIcon) return;

        node.parentNode.replaceChild(svgIcon, node);
    }

    async setObserver() {
        await this.watch(document.getElementsByTagName('body')[0]);
    }

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

    isMinicon(mutation) {
        if (mutation.addedNodes.length === 0) return;

        const addedNode = mutation.addedNodes[0];
        const isMinicon = addedNode.dataset && addedNode.dataset.minicon;
        isMinicon && this.swapElement(addedNode);
    }

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
