import { NAVIGATOR_CLASS, NAV_LEFT_CLASS, NAV_RIGHT_CLASS } from './config';
import dom from './util/dom';

import eventAggregator from './eventAggregator';

class Navigator {
    constructor(projector) {
        this.projector = projector;
        this._init();
    }

    _init() {
        this._left = this._generateLeft();
        this._right = this._generateRight();

        this.projector.appendChild(this._left);
        this.projector.appendChild(this._right);
    }

    _generateLeft() {
        const left = dom.createTag('a');
        dom.setAttr(left, 'href', '#');
        dom.addClass(left, NAVIGATOR_CLASS);
        dom.addClass(left, NAV_LEFT_CLASS);

        dom.addEvent(left, 'click', function() {
            eventAggregator.publish('moveToPrev')
        });

        return left;
    }

    _generateRight() {
        const right = dom.createTag('a');
        dom.setAttr(right, 'href', '#');
        dom.addClass(right, NAVIGATOR_CLASS);
        dom.addClass(right, NAV_RIGHT_CLASS);

        dom.addEvent(right, 'click', function() {
            eventAggregator.publish('moveToNext')
        });

        return right;
    }
}

export default Navigator