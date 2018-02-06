import Navigator from './component/Navigator';
import Indicator from './component/Indicator';
import Container from './component/Container';
import { next, prev } from "./util/Helper";

export default class Controller {
  constructor(model) {
    this.model = model;

    this._renderContainer();
    this._renderNavigator();
    this._renderIndicator();
  }

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

  load() {
    const prevButton = document.querySelector('.navigator-left');
    const nextButton = document.querySelector('.navigator-right');

    nextButton.addEventListener("click", () => {
      next(this.model);
      this.navigator.next();
      this.indicator.next();

    });

    prevButton.addEventListener("click", () => {
      prev(this.model);
      this.navigator.prev();
      this.indicator.prev();
    });


    const indicator = document.querySelector('.slide-indicator');

    indicator.addEventListener("click", (e) => {
      if(e.target && (e.target.nodeName === "LI" || e.target.nodeName === "BUTTON")) {
        const page = e.target.getAttribute('data-slide-index')
        this.navigator.moveTo(page);
        this.indicator.moveTo(page);
      }
    })
  }

  on = () => {
    this.navigator.observable.addListener(label, callback);
    this.indicator.observable.addListener(label, callback);
  }
}