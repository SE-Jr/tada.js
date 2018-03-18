import './styles/style.scss';
import Controller from './scripts/Controller';
import Config from './scripts/Config';

class Tada {
  constructor(option) {
    const config = this._createConfig(option);
    this._loadController(config);
  }

  _createConfig = (option) => {
    const wrapper = document.querySelector(option.selector);
    return new Config(option, wrapper);
  };

  _loadController = (config) => {
    this.controller = new Controller(config);
    this.controller.load();
  };

  on = (label, callback) => {
    this.controller.on(label, callback);
  };
}

window.Tada = Tada;
