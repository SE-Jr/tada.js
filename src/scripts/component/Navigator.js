import EventEmitter from '../EventEmitter';
import { CLASSNAMES } from '../Consts';

class Navigator {
  constructor(config){
    this.eventEmitter = new EventEmitter();
    this._config = config;
    this._selector = config.selector;
    this._containerWidth = config.containerWidth;
    this._tadaWrapper = config.wrapper;
  }

  toggle(direction, status) {
    [...this.elem].forEach(e => e.classList.remove('disabled'));

    if (!status) {
      this._tadaWrapper.querySelector(`a[data-direction="${direction}"]`).classList.add('disabled');
    }
  }

  render() {
    const next = document.createElement('a');
    const prev = document.createElement('a');

    next.classList.add(CLASSNAMES.navigator, CLASSNAMES.rightNavigator);
    prev.classList.add(CLASSNAMES.navigator, CLASSNAMES.leftNavigator);
    next.setAttribute('data-direction', 'right');
    prev.setAttribute('data-direction', 'left');
    this._tadaWrapper.appendChild(next);
    this._tadaWrapper.appendChild(prev);
    this.elem = this._tadaWrapper.querySelectorAll('.tada-navigator');
  }
}

export default Navigator;
