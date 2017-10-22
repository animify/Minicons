import iconFile from '../dist/Minicons.json';

export default class Handler {
    constructor(options) {
        this.icons = iconFile.icons;
        this.options = (options && options.config) || iconFile.config;
        this.canObserve = (options && options.observe) || true;
        this.canObserve && this.setObserver();
    }

    create(name, props) {
        const iconObject = this.icons.find(ic => ic.name === name);
        if (iconObject === null || iconObject === undefined) return null;

        const propsArray = [];

        Object.keys(props).forEach(prop => props[prop] && propsArray.push(`${prop}="${props[prop]}"`));

        const svg = `<svg ${propsArray.join(' ')}>${iconObject.content}</svg>`;
        const svgIcon = new DOMParser().parseFromString(svg, 'image/svg+xml');

        return svgIcon.querySelector('svg');
    }

    swap(node) {
        const svgIcon = this.create(node.dataset.minicon, this.options.attributes);
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
        isMinicon && this.swap(addedNode);
    }
}
