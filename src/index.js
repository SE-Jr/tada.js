import './styles/style.scss';
import Controller from './scripts/Controller';
import Config from './scripts/Config';
import Validator from './scripts/util/Validator';

export default class Tada {
  constructor(option) {
    if (!option.selector) {
      return new Error('required selector');
    }
    if (!Validator.isString(option.selector)) {
      return new Error('selector must be string type');
    }

    if (option.navigator && !Validator.isBoolean(option.navigator)) {
      return new Error('navigator must be boolean type');
    }
    if (option.pagination && !Validator.isBoolean(option.pagination)) {
      return new Error('pagination must be boolean type');
    }

    const wrapper = document.querySelector(option.selector);
    if (!Validator.isElement(wrapper)) {
      return new Error('wrapper must be element node');
    }

    this._createConfig(option, wrapper);
    this._loadController();
  }

  _createConfig(option, wrapper) {
    const config = new Config(option, wrapper);
    this._config = config.toJson();
  }

  _loadController() {
    this.controller = new Controller(this._config);
    this.controller.load();
  }

  on(label, callback) {
    this.controller.on(label, callback);
  }
}
