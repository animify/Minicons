import iconFile from '../dist/Minicons.json';

export default class Handler {
    constructor(options) {
        this.options = (options && options.config) || iconFile.config;
        this.canObserve = (options && options.observe) || true;
        this.canObserve && this.setObserver();
    }

    buildIcon(node) {
        console.log(node);
    }

    swap(node) {
        console.log(node);
    }

    isMinicon(mutation) {
        if (mutation.addedNodes.length === 0) return;

        const addedNode = mutation.addedNodes[0];
        const isMinicon = addedNode.dataset && addedNode.dataset.minicon;
        isMinicon && this.swap(addedNode);
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
}
