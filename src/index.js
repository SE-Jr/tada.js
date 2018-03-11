import './styles/style.scss';
import Controller from './scripts/Controller';
import Config from './scripts/Config';

class Tada {
  constructor(option) {
    const config = this._createConfig(option);
    this._loadController(config);
  }

  _createConfig = (option) => {
    //TODO 여러개 셀렉터 대응 필요
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

window.tada = Tada;
