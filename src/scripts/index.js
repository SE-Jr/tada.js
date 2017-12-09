import Container from './container';

function SlideProjector(userOptions) {
    // init container
    const container = new Container(userOptions);
    container.init();
};

export default SlideProjector