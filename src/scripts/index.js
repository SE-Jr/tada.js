import { DEFAULT_OPTIONS } from './config';
import dom from './util/dom';

import Container from './container';

function initProjector(userOptions) {
    const options = Object.assign({}, DEFAULT_OPTIONS, userOptions);

    const containers = dom.getElements(options.selector);

    // 각 컨테이너들 초기화
    containers.forEach(container => {
        new Container(options, container);
    });
}

export default initProjector