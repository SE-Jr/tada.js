import { DEFAULT_OPTIONS } from './config';
import dom from './util/dom';

class Container {
    constructor(options) {
        this.options = options;
    }

    init() {
        let containers = dom.getElements(this.options.selector);
        containers = Array.from(containers);
        containers.forEach(container => {
            dom.addClass(container, DEFAULT_OPTIONS.CONTAINER_CLASS);
        });
    }
}

export default Container