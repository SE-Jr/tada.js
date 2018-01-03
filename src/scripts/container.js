import { CONTAINER_CLASS } from './config';
import dom from './util/dom';

import Navigator from './navigator';
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

        new Navigator(this._projector);

        eventAggregator.subscribe('moveToNext', this._moveToNext.bind(this));
        eventAggregator.subscribe('moveToPrev', this._moveToPrev.bind(this));
    }

    _moveToNext() {
        if (this._index === this._length-1) {
            return;
        }

        this._index++;
        dom.setStyle(this._container, 'transform', `translateX(${-this._index * this._options.width}px)`);
    }

    _moveToPrev() {
        if (this._index === 0) {
            return;
        }

        this._index--;
        dom.setStyle(this._container, 'transform', `translateX(${-this._index * this._options.width}px)`);
    }
}

export default Container