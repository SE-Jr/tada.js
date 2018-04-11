import './styles/style.scss';
import Controller from './scripts/Controller';
import Config from './scripts/Config';

export default class Tada {
  constructor(option) {
    if (!option.selector) {
      return new Error('required selector');
    }
    const config = this._createConfig(option);
    this._loadController(config);
  }

  _createConfig(option) {
    const wrapper = document.querySelector(option.selector);
    const config = new Config(option, wrapper);
    return config.toJson();
  }

  _loadController(config) {
    this.controller = new Controller(config);
    this.controller.load();
  }

  on(label, callback) {
    this.controller.on(label, callback);
  }
}
