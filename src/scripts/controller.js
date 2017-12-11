import * as CONFIG from './config';
import dom from './util/dom';

class Controller {
    constructor(container) {
        this.container = container;
        this.listener = dom.createElement('div');

        this._bindEvents();
    }

    getListener() {
        return this.listener;
    }

    _bindEvents() {
        if (CONFIG.DEFAULT_OPTIONS.SHOW_NAVIGATOR) {
            const moveToPrevEvent = new Event('moveToPrev');
            const moveToNextEvent = new Event('moveToNext');

            this.listener.addEventListener('prev', function(e) {
                console.log('prev event fired');
                this.container.dispatchEvent(moveToPrevEvent);
            }.bind(this));

            this.listener.addEventListener('next', function(e) {
                console.log('next event fired');
                this.container.dispatchEvent(moveToNextEvent);
            }.bind(this));
        }
    }
}

export default Controller