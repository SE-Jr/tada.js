import EventEmitter from '../EventEmitter';
import { CLASSNAMES } from '../Consts';

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

    next.classList.add(CLASSNAMES.navigator, CLASSNAMES.rightNavigator);
    prev.classList.add(CLASSNAMES.navigator, CLASSNAMES.leftNavigator);
    const wrapper = document.querySelector('.' + CLASSNAMES.wrapper);
    wrapper.appendChild(next);
    wrapper.appendChild(prev);
  }

  //TODO container 움직이는 로직이 여기가 맞을까??
  moveTo(page) {
    const container = document.querySelector('.' + CLASSNAMES.container);    
    container.style.transform = `translateX(${-1 * page * this._containerWidth}px)`;
    // this.wrapper.style.marginLeft = `${-1 * this.currentSlideId * this.containerWidth}`;
  }
}

export default Navigator;