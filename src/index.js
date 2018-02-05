import './styles/style.scss'
import Controller from './scripts/Controller'
import Dom from './scripts/util/Dom'
import Model from "./scripts/Model";

class SlideProjector {
  constructor(option) {
    this.model = new Model();
    this._setConfig(option);
    this._loadController();
  }

  _setConfig = (option) => {
    const wrapper = Dom.query(option.selector);
    const slide = wrapper.children;
    this.model.selector = option.selector;
    this.model.containerWidth = wrapper.clientWidth;
    this.model.slideCnt = slide.length;
  };

  _loadController = () => {
    this.controller = new Controller(this.model);
    this.controller.load();
  };

  on = (label, callback) => {
    this.controller.on();
    this.navigator.observable.addListener(label, callback);
    this.indicator.observable.addListener(label, callback);
  };
}

window.SP = SlideProjector;
