import Dom from '../util/Dom'
import EventEmitter from '../EventEmitter';
import Component from './Component';

class Navigator extends Component{
  constructor(config){
    super(config)
    this.observable = new EventEmitter();
    this.config = config;
    this.selector = config.selector;
    this.containerWidth = config.containerWidth;
    this.wrapper = Dom.query(this.selector);
  }

  next() {
    super.next();
    this.moveTo(this.slideIdx);
    this.observable.emit('next');
  }

  prev() {
    super.prev();
    this.moveTo(this.slideIdx);
    this.observable.emit('prev');
  }

  render() {
    const next = Dom.createElement('a');
    const prev = Dom.createElement('a');

    Dom.addClass(next, 'slide-navigator');
    Dom.addClass(next, 'navigator-right');

    Dom.addClass(prev, 'slide-navigator');
    Dom.addClass(prev, 'navigator-left');

    const container = Dom.query('.slide-wrap');

    container.appendChild(next);
    container.appendChild(prev);
  }

  moveTo(page) {
    this.wrapper.style.transform = `translateX(${-1 * page * this.containerWidth}px)`;
    // this.wrapper.style.marginLeft = `${-1 * this.currentSlideId * this.containerWidth}`;
  }
}

export default Navigator;