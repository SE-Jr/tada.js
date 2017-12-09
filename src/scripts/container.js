import { DEFAULT_OPTIONS } from './config';
import dom from './util/dom';

class Container {
    constructor(options) {
        this.options = options;
    }

    init() {
        let containers = dom.getElements(this.options.selector);
        containers = Array.from(containers);
        containers.forEach(el => {
            dom.addClass(el, DEFAULT_OPTIONS.CONTAINER_CLASS);
        });

        console.log(containers);
    }
}

export default Container