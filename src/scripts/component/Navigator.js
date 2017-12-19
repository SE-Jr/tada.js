import { next, prev, infinite } from "./Helper"
import Dom from '../util/Dom'
import EventEmitter from '../EventEmitter';

class Navigator {
  constructor(config){
    this.observable = new EventEmitter();
    this.config = config;
    this.selector = config.selector;
    this.containerWidth = config.containerWidth;
    this.currentSlideId = config.currentPage;
    this.slideCnt = config.slideCnt;
    this.wrapper = Dom.query(this.selector);
  }

  next() {
    this.currentSlideId = next(this.currentSlideId)
    if(this.config.infinite) {
      this.currentSlideId = infinite(this.currentSlideId, this.slideCnt)
    }
    this.moveTo();
    this.observable.emit('next');
  }

  prev() {
    this.currentSlideId = prev(this.currentSlideId)
    if(this.config.infinite) {
      this.currentSlideId = infinite(this.currentSlideId, this.slideCnt)
    }
    this.moveTo();
    this.observable.emit('prev');
  }

  moveTo() {
    this.wrapper.style.transform = `translateX(${-1 * this.currentSlideId * this.containerWidth}px)`;
    // this.wrapper.style.marginLeft = `${-1 * this.currentSlideId * this.containerWidth}`;
  }
}

export default Navigator;