import * as CONFIG from './config';
import dom from './util/dom';

class Controller {
    constructor(container) {
        this.container = container;
    }

    bindEvents() {
        if (CONFIG.DEFAULT_OPTIONS.SHOW_NAVIGATOR) {
            this.container.addEventListener('prev', function(e) {
                console.log('prev event fired');
            });

            this.container.addEventListener('next', function(e) {
                console.log('next event fired');
            });
        }
    }
}

export default Controller