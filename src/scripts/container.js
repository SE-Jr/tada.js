import { DEFAULT_OPTIONS } from './config';
import dom from './util/dom';

import Navigator from './navigator';
import Controller from './controller';

class Container {
    constructor(options, elContainer) {
        this.options = options;
        this.elContainer = elContainer;
        this._index = 0;
    }

    init() {
        // init controller
        const controller = new Controller(this.elContainer);
        const listener = controller.getListener();

        dom.addClass(this.elContainer, DEFAULT_OPTIONS.CONTAINER_CLASS);
        this._serialize();

        if (this.options.SHOW_NAVIGATOR) {
            const navigator = new Navigator(listener);
            navigator.appendTo(this.elContainer);

            this._bindNavEvents();
        }
    }

    _serialize() {
        const children = dom.getChildren(this.elContainer, 'li');

        [].forEach.call(children, (child, index) => {
            dom.setStyle(child, 'left', `${child.offsetWidth * index}px`);
        });
    }

    _bindNavEvents() {
        this.elContainer.addEventListener('moveToPrev', function(e) {
            this._index--;
            this._moveTo(this._index);
        }.bind(this));

        this.elContainer.addEventListener('moveToNext', function(e) {
            this._index++;
            this._moveTo(this._index);
        }.bind(this));
    }

    _moveTo(index) {
        // 현재 인덱스와 차이 구해서 transferX
        console.log('index: ', this._index);
    }
}

export default Container