import { DEFAULT_OPTIONS } from './config';
import dom from './util/dom';

import Navigator from './navigator';

class Container {
    constructor(options) {
        this.options = options;
    }

    init() {
        const self = this;
        let containers = dom.getElements(this.options.SELECTOR);
        containers = Array.from(containers);
        containers.forEach(container => {
            dom.addClass(container, DEFAULT_OPTIONS.CONTAINER_CLASS);

            if (self.options.SHOW_NAVIGATOR) {
                const navigator = new Navigator();
                navigator.appendTo(container);
            }
        });
    }
}

export default Container