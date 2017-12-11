import '../styles/style.scss';

import { DEFAULT_OPTIONS } from './config';
import dom from './util/dom';

import Container from './container';

function SlideProjector(userOptions) {
    const options = Object.assign({}, DEFAULT_OPTIONS, userOptions);
    
    // init containers
    const elContainers = dom.getElements(options.SELECTOR);
    [].forEach.call(elContainers, function(elContainer) {
        const container = new Container(options, elContainer);
        container.init();
    });
};

export default SlideProjector