import {
    INDICATOR_CLASS, INDI_CIRCLE_CLASS, INDI_ITEM_CLASS, INDI_BUTTON_CLASS
} from './config';
import dom from './util/dom';

class Indicator {
    constructor(projector, length) {
        this._projector = projector;
        this._length = length;

        this._init();
    }

    _init() {
        this._indicator = this._generateIndicator();
        this._projector.appendChild(this._indicator);
    }

    _generateIndicator() {
        const indicator = dom.createTag('ul');
        dom.addClass(indicator, INDICATOR_CLASS);
        dom.addClass(indicator, INDI_CIRCLE_CLASS);

        for (let index = 1; index <= this._length; index++) {
            const item = dom.createTag('li');
            dom.addClass(item, INDI_ITEM_CLASS);

            const button = dom.createTag('button');
            dom.addClass(button, INDI_BUTTON_CLASS);
            button.innerHTML = index;

            item.appendChild(button);
            indicator.appendChild(item);
        }

        return indicator;
    }
}

export default Indicator