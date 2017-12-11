import Actor from "./Actor";
import Dom from './util/dom'

class Navigator extends Actor {

    constructor(config, subject){
        super(config, subject);
        this.config = config;
        this.selector = config.selector;
        this.slideCnt = config.slideCnt;
        this.currentSlideId = config.currentPage;
        this.containerWidth = config.containerWidth;
        this.wrapper = Dom.query(this.selector);
    }

    next() {
        this.currentSlideId = this.currentSlideId + 1;
        this.moveTo(this.currentSlideId);
		this.observable.emit('next');
    }

    prev() {
        this.currentSlideId = this.currentSlideId - 1;
        this.moveTo(this.currentSlideId);
        this.observable.emit('prev');
    }

    moveTo(page) {
        this.wrapper.style.marginLeft = `${-1 * page * this.containerWidth}`;
    }
}

export default Navigator;