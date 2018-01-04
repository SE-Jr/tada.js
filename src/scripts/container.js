import { CONTAINER_CLASS } from './config';
import dom from './util/dom';

import Navigator from './navigator';
import Indicator from './indicator';
import eventAggregator from './eventAggregator';

class Container {
    constructor(options, projector) {
        this._options = options;
        this._projector = projector;
        this._container = dom.getChildrenByTagName(this._projector, 'ul')[0];

        this._init();
    }

    _init() {
        dom.addClass(this._container, CONTAINER_CLASS);

        this._index = 0;
        this._length = this._container.childElementCount;

        if (this._options.showNavigator) {
            new Navigator(this._projector);

            // TODO: moveToPrev, moveToNext를 moveTo 하나로 처리할 수 없을까
            eventAggregator.subscribe('moveToNext', this._moveToNext.bind(this));
            eventAggregator.subscribe('moveToPrev', this._moveToPrev.bind(this));
        }

        if (this._options.showIndicator) {
            new Indicator(this._projector, this._length);

            eventAggregator.subscribe('moveTo', this._moveTo.bind(this));
        }
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
        if (destIndex === this._index) {
            return;
        }

        dom.setStyle(this._container, 'transform', `translateX(${-destIndex * this._options.width}px)`);

        this._index = destIndex;
    }
}

export default Container