import Actor from "./Actor";
import Dom from '../util/Dom'

class Indicator extends Actor {
  constructor(config, observer){
    super(config, observer);
    this.init();
    this.bindEvent();
  }

  init() {
    const button = Dom.query(`button[data-slide-index="0"]`)
    Dom.addClass(button, 'active')
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
    Dom.removeClass(Dom.query('.slide-indicator-button.active'), 'active');
    const button = Dom.query(`button[data-slide-index="${this.currentSlideId}"]`)
    Dom.addClass(button, 'active')

  }
}

export default Indicator