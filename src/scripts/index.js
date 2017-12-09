import { DEFAULT_OPTIONS } from './config';
import Container from './container';

function SlideProjector(userOptions) {
    const options = Object.assign({}, DEFAULT_OPTIONS, userOptions);
    
    // init container
    const container = new Container(options);
    container.init();
};

export default SlideProjector