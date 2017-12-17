import './styles/style.scss'
import Controller from './scripts/Controller'
import Container from './scripts/Container'
import { CAROUSEL_CONFIG } from './scripts/const/Config'
import Dom from './scripts/util/Dom'

const SP = class SlideProjector {
  constructor(option) {
    this._setConfig(option);
    this._init();
  }

  _setConfig = (option) => {
    const selector  = option.selector;
    const wrapper = Dom.query(selector);
    const containerWidth = wrapper.clientWidth;
    const slide = wrapper.children;
    const slideCnt = slide.length;

    this.config = Object.assign({}, CAROUSEL_CONFIG, {
      selector,
      containerWidth,
      slideCnt,
    });
  };

  _init = () => {
    this._initContainer();
    this._initController();
  };

  _initContainer = () => {
    this.container = new Container(this.config);
    this.container.init();
  };

  _initController = () => {
    this.controller = new Controller(this.config);
    this.controller.init();
  };

  on = (label, callback) => {
    this.controller.on(label, callback);
  };
}

window.SP = SP;
