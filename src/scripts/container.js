import { DEFAULT_OPTIONS } from './config';
import dom from './util/dom';

import Navigator from './navigator';
import Controller from './controller';

class Container {
    constructor(options, elContainer) {
        this.options = options;
        this.elContainer = elContainer;
        this.index = 0;
        this.xPosition = 0;
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
            this._moveTo(this.index - 1);
        }.bind(this));

        this.elContainer.addEventListener('moveToNext', function(e) {
            this._moveTo(this.index + 1);
        }.bind(this));
    }

    _moveTo(destIndex) {
        const steps = this.index - destIndex;
        this.xPosition += steps * 300;

        dom.setStyle(this.elContainer, 'transform', `translateX(${this.xPosition}px)`);

        this.index = destIndex;
    }
}

export default Container