import { CONTAINER_CLASS } from './config';
import dom from './util/dom';

class Container {
    constructor(options, container) {
        dom.addClass(container, CONTAINER_CLASS);
    }
}

export default Container