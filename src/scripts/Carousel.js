import '../styles/style.scss'
import Dom from './util/dom'
import Controller from './Controller'
import { CAROUSEL_CONFIG } from './Config'

export default class SlideProjector {
  constructor(option) {
    this._setConfig(option);
    this._init();
  }

  _setConfig = (option) => {
    const selector  = option.selector;
    const wrapper = Dom.query(selector);
    const containerWidth = wrapper.offsetWidth;
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
    let config = this.config;
    const container = Dom.createElement('div');
    const wrapper = Dom.query(config.selector);
    const parent = wrapper.parentNode;
    const slide = wrapper.children;

    parent.replaceChild(container, wrapper);
    container.appendChild(wrapper);
    Dom.addClass(container, `container-${config.selector}`);
    Dom.addClass(wrapper, 'slide-wrapper');

    container.style.width = config.containerWidth;
    wrapper.style.width = config.containerWidth * config.slideCnt;

    const slideWidth = `${100 / config.slideCnt}%`;

    [...slide].forEach((el) => {
      Dom.addClass(el, 'slide')
      el.style.width = slideWidth

    })

    //TODO REFACTORING

    const next = document.createElement('button');
    const prev = document.createElement('button');

    Dom.addClass(next, 'slide-projector-next');
    Dom.addClass(prev, 'slide-projector-prev');

    container.appendChild(next);
    container.appendChild(prev);

  };

  _initController = () => {
    this.controller = new Controller(this.config);
    this.controller.init();
  };

  on = (label, callback) => {
    this.controller.on(label, callback);
  };
}
