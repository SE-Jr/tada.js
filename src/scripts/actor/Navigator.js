import Actor from "./Actor";
import Dom from '../util/Dom'

class Navigator extends Actor {
  constructor(config, observer){
    super(config, observer);
    this.config = config;
    this.selector = config.selector;
    this.containerWidth = config.containerWidth;
    this.wrapper = Dom.query(this.selector);
    this.bindEvent();
  }

  bindEvent() {
    this.observer.addListener('next', () => {
      super.next();
      this.moveTo();
    })

    this.observer.addListener('prev', () => {
      super.prev();
      this.moveTo();

    })
  }

  moveTo() {
    this.wrapper.style.transform = `translateX(${-1 * this.currentSlideId * this.containerWidth}px)`;
    // this.wrapper.style.marginLeft = `${-1 * this.currentSlideId * this.containerWidth}`;
  }
}

export default Navigator;