import EventEmitter from '../EventEmitter';

class Navigator {
  constructor(config, state){
    this._evetnEmitter = new EventEmitter();
    this._config = config;
    this._selector = config.selector;
    this._containerWidth = config.containerWidth;
    this._wrapper = config.wrapper;
    this._state = state;
  }

  next() {
    this.moveTo(this._state.currentPage);
    this._evetnEmitter.emit('next');
  }

  prev() {
    this.moveTo(this._state.currentPage);
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