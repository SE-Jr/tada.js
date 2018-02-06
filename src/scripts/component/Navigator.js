import EventEmitter from '../EventEmitter';

class Navigator {
  constructor(model){
    this._evetnEmitter = new EventEmitter();
    this._model = model;
    this._selector = model.selector;
    this._containerWidth = model.containerWidth;
    this._wrapper = document.querySelector(this._selector);
  }

  next() {
    this.moveTo(this._model.currentPage);
    this._evetnEmitter.emit('next');
  }

  prev() {
    this.moveTo(this._model.currentPage);
    this._evetnEmitter.emit('prev');
  }

  render() {
    const next = document.createElement('a');
    const prev = document.createElement('a');

    next.classList.add('slide-navigator', 'navigator-right');
    prev.classList.add('slide-navigator', 'navigator-left');

    const container = document.querySelector('.slide-wrap');
    container.appendChild(next);
    container.appendChild(prev);
  }

  moveTo(page) {
    this._wrapper.style.transform = `translateX(${-1 * page * this._containerWidth}px)`;
    // this.wrapper.style.marginLeft = `${-1 * this.currentSlideId * this.containerWidth}`;
  }
}

export default Navigator;