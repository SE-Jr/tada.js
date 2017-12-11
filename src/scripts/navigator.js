import { NAVIGATOR_CONFIG } from './config'
import dom from './util/dom';

class Navigator {
    constructor(container) {
        this.container = container;

        this.prevButton = dom.createElement('button');
        this.prevButton.innerHTML = NAVIGATOR_CONFIG.PREV_BUTTON.SHAPE;
        this.prevButton.className = NAVIGATOR_CONFIG.PREV_BUTTON.CLASS;
        this.nextButton = dom.createElement('button');
        this.nextButton.innerHTML = NAVIGATOR_CONFIG.NEXT_BUTTON.SHAPE;
        this.nextButton.className = NAVIGATOR_CONFIG.NEXT_BUTTON.CLASS;
    }

    appendTo(element) {
        element.appendChild(this.prevButton);
        element.appendChild(this.nextButton);

        this._bindEvents()
    }

    _bindEvents() {
        const prevEvent = new Event('prev');
        const nextEvent = new Event('next');

        this.prevButton.addEventListener('click', function(e) {
            this.container.dispatchEvent(prevEvent);
        }.bind(this));

        this.nextButton.addEventListener('click', function(e) {
            this.container.dispatchEvent(nextEvent);
        }.bind(this));
    }
}

export default Navigator