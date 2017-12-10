import Observer from "./Observer";
import Dom from './util/dom'

class Navigator extends Observer {

    constructor(config, subject){
        super(config, subject)
        this.config = config;
        this.subject = subject;
        this.currentSlideId = config.currentPage;

    }

    //TODO moveTo 활용
    next() {
        console.log('next')
        const targetSlideId = this.currentSlideId + 1;
        const currentPosition = this.config.containerWidth * this.currentSlideId;
        const targetPosition = -currentPosition - this.config.containerWidth;
        this.currentSlideId = targetSlideId;

        console.log(targetPosition);

        const wrapper = Dom.query(this.config.selector);
        wrapper.style.transform = `translate3d(${targetPosition}, 0, 0)`
    }

    prev() {

    }
}

export default Navigator;