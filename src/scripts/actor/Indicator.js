import Actor from "./Actor";
import Dom from '../util/Dom'

class Indicator extends Actor {
  constructor(config, observer){
    super(config, observer);
    const button = Dom.query(`button[data-slide-index="0"]`)
    Dom.addClass(button, 'active')
    this.bindEvent();
  }

  bindEvent() {
    this.observer.addListener('next', () => {
      this.next();
    })

    this.observer.addListener('prev', () => {
      this.prev();
    })
  }

  //TODO REFACTOR
  prev() {
    super.prev();
    this.moveTo(this.currentSlideId);
  }

  next() {
    super.next();
    this.moveTo(this.currentSlideId);
  }

  moveTo(page) {
    Dom.removeClass(Dom.query('.slide-indicator-button.active'), 'active');
    const button = Dom.query(`button[data-slide-index="${page}"]`)
    Dom.addClass(button, 'active')

  }
}

export default Indicator