import * as CONFIG from './config';
import dom from './util/dom';

class Controller {
    constructor() {
        this.listener = dom.createElement('div');
    }

    getListener() {
        return this.listener;
    }

    connectTo(subscriber) {
        if (CONFIG.DEFAULT_OPTIONS.SHOW_NAVIGATOR) {
            const moveToPrevEvent = new Event('moveToPrev');
            const moveToNextEvent = new Event('moveToNext');

            this.listener.addEventListener('prev', function(e) {
                subscriber.container.dispatchEvent(moveToPrevEvent);
            });

            this.listener.addEventListener('next', function(e) {
                subscriber.container.dispatchEvent(moveToNextEvent);
            });
        }
    }
}

export default Controller