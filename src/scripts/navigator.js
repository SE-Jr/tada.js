import { NAVIGATOR_CONFIG } from './config'
import dom from './util/dom';

class Navigator {
    constructor() {
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

    }
}

export default Navigator