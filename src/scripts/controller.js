import * as CONFIG from './config';
import dom from './util/dom';

class Controller {
    constructor(container) {
        this.container = container;
    }

    bindEvents() {
        if (CONFIG.DEFAULT_OPTIONS.SHOW_NAVIGATOR) {
            const prevButtons = dom.getElements(CONFIG.NAVIGATOR_CONFIG.PREV_BUTTON);
            const nextButtons = dom.getElements(CONFIG.NAVIGATOR_CONFIG.NEXT_BUTTON);

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