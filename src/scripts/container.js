import { CONTAINER_CLASS } from './config';
import dom from './util/dom';

import Navigator from './navigator';
import eventAggregator from './eventAggregator';

class Container {
    constructor(options, projector) {
        this.options = options;
        this.projector = projector;
        this.container = dom.getChildrenByTagName(this.projector, 'ul')[0];

        this._init();
    }

    _init() {
        dom.addClass(this.container, CONTAINER_CLASS);

        new Navigator(this.projector);

        eventAggregator.subscribe('moveToNext', this._moveToNext);
        eventAggregator.subscribe('moveToPrev', this._moveToPrev);
    }

    _moveToNext() {
        console.log('move to next');
    }

    _moveToPrev() {
        console.log('move to prev');
    }
}

export default Container