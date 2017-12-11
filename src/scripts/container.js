import { DEFAULT_OPTIONS } from './config';
import dom from './util/dom';

import Navigator from './navigator';
import Controller from './controller';
import Indicator from './indicator';

class Container {
    constructor(options, elContainer) {
        this.options = options;
        this.elContainer = elContainer;
        this.index = 0;
        this.xPosition = 0;
    }

    init() {
        const subscriber = {
            container: this.elContainer
        };

        dom.addClass(this.elContainer, DEFAULT_OPTIONS.CONTAINER_CLASS);
        this._serialize();

        // init controller
        const controller = new Controller();
        const listener = controller.getListener();

        if (this.options.SHOW_NAVIGATOR) {
            // init navigator
            const navigator = new Navigator(listener);
            navigator.appendTo(this.elContainer);

            this._bindNavEvents();
        }

        if (this.options.SHOW_INDICATOR) {
            const indicator = new Indicator(listener);
            subscriber.indicator = indicator;
        }

        controller.connectTo(subscriber);
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