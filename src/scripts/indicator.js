import {
    INDICATOR_CLASS, INDI_CIRCLE_CLASS, INDI_ITEM_CLASS, INDI_BUTTON_CLASS
} from './config';
import dom from './util/dom';

import eventAggregator from './eventAggregator';

class Indicator {
    constructor(projector, length) {
        this._projector = projector;
        this._index = 0;
        this._length = length;

        this._init();
    }

    _init() {
        this._setIndicator();
        this._activateIndicatorAt(0);

        // TODO: moveToPrev, moveToNext를 moveTo 하나로 처리할 수 없을까
        eventAggregator.subscribe('moveToPrev', this._moveToPrev.bind(this));
        eventAggregator.subscribe('moveToNext', this._moveToNext.bind(this));
        eventAggregator.subscribe('moveTo', this._moveTo.bind(this));
    }

    _setIndicator() {
        const indicator = dom.createTag('ul');
        dom.addClass(indicator, INDICATOR_CLASS);
        dom.addClass(indicator, INDI_CIRCLE_CLASS);

        this._buttons = [];

        for (let index = 0; index < this._length; index++) {
            const item = dom.createTag('li');
            dom.addClass(item, INDI_ITEM_CLASS);

            const button = dom.createTag('button');
            dom.addClass(button, INDI_BUTTON_CLASS);
            button.innerHTML = index;

            dom.addEvent(button, 'click', function() {
                eventAggregator.publish('moveTo', index);
            });

            this._buttons.push(button);

            item.appendChild(button);
            indicator.appendChild(item);
        }

        this._indicator = indicator;
        this._projector.appendChild(this._indicator);
    }

    _moveToNext() {
        if (this._index === this._length-1) {
            return;
        }

        this._moveTo(this._index+1);
    }

    _moveToPrev() {
        if (this._index === 0) {
            return;
        }

        this._moveTo(this._index-1);
    }

    _moveTo(destIndex) {
        if (this._index === destIndex) {
            return;
        }

        this._activateIndicatorAt(destIndex);
        this._deactivateIndicatorAt(this._index);

        this._index = destIndex;
    }

    _activateIndicatorAt(index) {
        dom.addClass(this._buttons[index], 'is-active');
    }

    _deactivateIndicatorAt(index) {
        dom.removeClass(this._buttons[index], 'is-active');
    }
}

export default Indicator