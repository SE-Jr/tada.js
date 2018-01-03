import { CONTAINER_CLASS } from './config';
import dom from './util/dom';

import Navigator from './navigator';

class Container {
    constructor(options, container) {
        this.container = container;
        this._init();
    }

    _init() {
        dom.addClass(this.container, CONTAINER_CLASS);

        new Navigator(this.container);
    }
}

export default Container