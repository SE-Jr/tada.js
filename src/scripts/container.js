import { CONTAINER_CLASS } from './config';
import dom from './util/dom';

import Navigator from './navigator';

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
    }

    /**
     * 1. navigator 삽입 (controller 정보를 모든 컴포넌트가 공유해야한다)
     * 2. 해당 버튼 누르면 좌우로 움직이도록 구현
     * 3. ...indicator..?
     */
}

export default Container