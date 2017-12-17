import '../styles/style.scss';
import { DEFAULT_OPTIONS, ERROR_MESSAGE } from './config';

export default class Component {
  constructor(option) {
    this.init(option);
  }

  init(option) {
    this._refineOption(option);
  }

  _refineOption(option) {
    if (!option || typeof option !== 'object') {
      throw new Error(ERROR_MESSAGE.OPTION_REQUIRED);
    }
    if (!option.selector || typeof option.selector !== 'string') {
      throw new Error(ERROR_MESSAGE.INVALID_SELECTOR);
    }
    this.option = Object.assign(DEFAULT_OPTIONS, option);
  }
}
