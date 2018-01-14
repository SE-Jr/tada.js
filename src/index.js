import './styles/style.scss'
import Controller from './scripts/Controller'
import Container from './scripts/component/Container'
import Dom from './scripts/util/Dom'
import Navigator from './scripts/component/Navigator'
import Model from "./scripts/Model";
import Indicator from './scripts/component/Indicator'

class SlideProjector {
  constructor(option) {
    this.model = new Model();
    this._setConfig(option);
    this._render();
  }

  _setConfig = (option) => {
    const wrapper = Dom.query(option.selector);
    const slide = wrapper.children;
    this.model.selector = option.selector;
    this.model.containerWidth = wrapper.clientWidth;
    this.model.slideCnt = slide.length;
  };

  _render = () => {
    this._renderContainer();
    this._renderNavigator();
    this._renderIndicator();
    this._loadController();
  };


  _renderContainer = () => {
    this.container = new Container(this.model);
    this.container.render();
  };

  _renderNavigator = () => {
    this.navigator = new Navigator(this.model);
    this.navigator.render();
  };

  _renderIndicator = () => {
    this.indicator = new Indicator(this.model);
    this.indicator.render();
  };

  _loadController = () => {
    //TODO REFACTOR
    this.controller = new Controller(this.model, this.navigator, this.indicator);
    this.controller.load();
  };

  on = (label, callback) => {
    this.navigator.observable.addListener(label, callback);
    this.indicator.observable.addListener(label, callback);
  };
}

window.SP = SlideProjector;
