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

  disableNextIfLast(element, currentPage) {
    const lastPage = this._config.slideCount - 1;
    const nextDisabled = (currentPage >= lastPage);
    element.classList.toggle('disabled', nextDisabled);
  }

  disablePrevIfFirst(element, currentPage) {
    const firstPage = 0;
    const prevDisabled = (currentPage <= firstPage);
    element.classList.toggle('disabled', prevDisabled);
  }

  render() {
    const next = document.createElement('a');
    const prev = document.createElement('a');

    next.classList.add('slide-navigator', 'navigator-right');
    prev.classList.add('slide-navigator', 'navigator-left');

    if (!this._config.infinite) {
      this.disableNextIfLast(next, this._state.currentPage);
      this.disablePrevIfFirst(prev, this._state.currentPage);
    }

    const container = document.querySelector('.slide-wrap');
    container.appendChild(next);
    container.appendChild(prev);
  }

  moveTo(page) {
    // 상태값 바뀌면 - 자동 render - disable 검사 <== 이런 흐름이 맞는 거 같은데..
    if (!this._config.infinite) {
      this.disableNextIfLast(document.querySelector('.navigator-right'), page);
      this.disablePrevIfFirst(document.querySelector('.navigator-left'), page);
    }

    this._wrapper.style.transform = `translateX(${-1 * page * this._containerWidth}px)`;
    // this.wrapper.style.marginLeft = `${-1 * this.currentSlideId * this.containerWidth}`;
  }
}

export default Navigator;