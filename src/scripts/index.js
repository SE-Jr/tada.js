import { DEFAULT_OPTIONS, PROJECTOR_CLASS } from './config';
import dom from './util/dom';

import Container from './container';

function initProjector(userOptions) {
    const options = Object.assign({}, DEFAULT_OPTIONS, userOptions);
    const projectors = dom.getElements(options.selector);

    // 각 프로젝터들에 대해 Container 초기화
    projectors.forEach(projector => {
        dom.addClass(projector, PROJECTOR_CLASS);

        new Container(options, projector);
    });
}

export default initProjector