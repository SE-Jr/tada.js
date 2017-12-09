import { DEFAULT_OPTIONS } from './config';

function SlideProjector(options) {
    this.option = Object.assign({}, DEFAULT_OPTIONS, options);
    console.log(this.option);
};

export default SlideProjector