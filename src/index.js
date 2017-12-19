import './styles/style.scss'
import Controller from './scripts/Controller'
import Container from './scripts/component/Container'
import { CAROUSEL_CONFIG } from './scripts/const/Config'
import Dom from './scripts/util/Dom'
import Navigator from './scripts/component/Navigator'
import Indicator from './scripts/component/Indicator'

class SlideProjector {
  constructor(option) {
    this._setConfig(option);
    this._render();
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

  _render = () => {
    this._renderContainer();
    this._renderNavigator();
    this._renderIndicator();
    this._loadController();
  };


  _renderContainer = () => {
    this.container = new Container(this.config);
    this.container.render();
  };

  _renderNavigator = () => {
    this.navigator = new Navigator(this.config);
    this.navigator.render();
  };

  _renderIndicator = () => {
    this.indicator = new Indicator(this.config);
    this.indicator.render();
  };

  _loadController = () => {
    this.controller = new Controller(this.config);
    this.controller.load();
  };

  on = (label, callback) => {
    this.navigator.observable.addListener(label, callback);
    this.indicator.observable.addListener(label, callback);
  };
}

window.SP = SlideProjector;
