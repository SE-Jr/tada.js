import Navigator from './component/Navigator'
import Indicator from './component/Indicator'
import Dom from './util/dom'

export default class Controller {
  constructor(config) {
    this.config = config;
    this.navigator = new Navigator(this.config);
    this.indicator = new Indicator(this.config);
  }

  on(label, callback) {
    this.navigator.observer.addListener(label, callback);
    this.indicator.observer.addListener(label, callback);
  }

  init = () => {
    const prev = Dom.query('.navigator-left');
    const next = Dom.query('.navigator-right');

    next.addEventListener("click", () => {
      this.navigator.next();
      this.indicator.next();

    });

    prev.addEventListener("click", () => {
      this.navigator.prev();
      this.indicator.prev();
    });
  }
}