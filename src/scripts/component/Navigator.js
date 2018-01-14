import Dom from '../util/Dom'
import EventEmitter from '../EventEmitter';

class Navigator {
  constructor(model){
    this._observable = new EventEmitter();
    this._model = model;
    this._selector = model.selector;
    this._containerWidth = model.containerWidth;
    this._wrapper = Dom.query(this._selector);
  }

  next() {
    this.moveTo(this._model.currentPage);
    this._observable.emit('next');
  }

  prev() {
    this.moveTo(this._model.currentPage);
    this._observable.emit('prev');
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
    this._wrapper.style.transform = `translateX(${-1 * page * this._containerWidth}px)`;
    // this.wrapper.style.marginLeft = `${-1 * this.currentSlideId * this.containerWidth}`;
  }
}

export default Navigator;