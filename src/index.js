import './styles/style.scss';
import Controller from './scripts/Controller';
import { CAROUSEL } from './scripts/Consts';
import Config from './scripts/Config';

class SlideProjector {
  constructor(option) {
    this._setConfig(option);
    this._loadController();
  }

  _setConfig = (option) => {
    this._config = new Config(Object.assign(CAROUSEL, option));
    this._config.wrapper = document.querySelector(option.selector);
    const slide = this._config.wrapper.children;
    this._config.selector = option.selector;
    this._config.containerWidth = this._config.wrapper.clientWidth;
    this._config.slideCount = slide.length;
  };

  _loadController = () => {
    this.controller = new Controller(this._config);
    this.controller.load();
  };

  on = (label, callback) => {
    this.controller.on(label, callback);
  };
}

window.SP = SlideProjector;
