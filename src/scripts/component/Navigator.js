import EventEmitter from '../EventEmitter';
import { CLASSNAMES } from '../Consts';

class Navigator {
  constructor(config, state){
    this.eventEmitter = new EventEmitter();
    this._config = config;
    this._selector = config.selector;
    this._containerWidth = config.containerWidth;
    this._tadaWrapper = config.wrapper;
    this._state = state;
  }

  render() {
    const next = document.createElement('a');
    const prev = document.createElement('a');

    next.classList.add(CLASSNAMES.navigator, CLASSNAMES.rightNavigator);
    prev.classList.add(CLASSNAMES.navigator, CLASSNAMES.leftNavigator);
    this._tadaWrapper.appendChild(next);
    this._tadaWrapper.appendChild(prev);
    this.prevNavigatorElement = prev;
    this.nextNavigatorElement = next;
  }

}

export default Navigator;
