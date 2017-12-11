import Actor from "./Actor";
import Dom from './util/dom'

class Navigator extends Actor {

    constructor(config, subject){
        super(config, subject);
        this.config = config;
        this.currentSlideId = config.currentPage;
	}

    //TODO moveTo 활용
    next() {
        console.log('next');
        const targetSlideId = this.currentSlideId + 1;
        const currentPosition = this.config.containerWidth * this.currentSlideId;
        const targetPosition = -currentPosition - this.config.containerWidth;
        this.currentSlideId = targetSlideId;

        console.log(targetPosition);

        const wrapper = Dom.query(this.config.selector);
        wrapper.style.transform = `translate3d(${targetPosition}, 0, 0)`
		this.observable.emit("next");
    }

    prev() {}
    moveTo() {}
}

export default Navigator;