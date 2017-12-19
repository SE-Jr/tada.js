import { next, prev, infinite } from "./Helper"
import Dom from '../util/Dom'
import EventEmitter from '../EventEmitter';

class Indicator{
  constructor(config){
    this.observable = new EventEmitter();
    this.config = config;
    this.slideCnt = config.slideCnt;
    this.currentSlideId = config.currentPage;
    this.init();
  }

  init() {
    const button = Dom.query(`button[data-slide-index="0"]`)
    Dom.addClass(button, 'active')
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
    Dom.removeClass(Dom.query('.slide-indicator-button.active'), 'active');
    const button = Dom.query(`button[data-slide-index="${this.currentSlideId}"]`)
    Dom.addClass(button, 'active')

  }
}

export default Indicator