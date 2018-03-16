import EventEmitter from '../EventEmitter';
import { CLASSNAMES } from '../Consts';
import { canMove } from '../util/Helper';


class Navigator {
  constructor(config, state) {
    this.eventEmitter = new EventEmitter();
    this._config = config;
    this._state = state;
    this._selector = config.selector;
    this._containerWidth = config.containerWidth;
    this._tadaWrapper = config.wrapper;
  }

  toggle() {
    const { direction, on } = canMove(this._state, this._config);
    [...this.elem].forEach(e => e.disabled = false);

    if (!on) {
      this._tadaWrapper.querySelector(`button[data-direction="${direction}"]`).disabled = !on;
    }

  }

  render() {
    const next = document.createElement('button');
    const prev = document.createElement('button');

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
