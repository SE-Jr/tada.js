import Navigator from './Navigator'
import Indicator from './Indicator'
import Dom from './util/dom'

export default class Controller {
  constructor(config) {
    this.config = config;
    this.navigator = new Navigator(this.config);
    this.indicator = new Indicator(this.config);
  }

  on(label, callback) {
    this.navigator.observable.addListener(label, callback);
    this.indicator.observable.addListener(label, callback);
  }

  init() {
    let that = this;
    const prev = Dom.query(`${this.config.navigator.prev}`);
    const next = Dom.query(`${this.config.navigator.next}`);

    next.addEventListener("click", function () {
      that.navigator.next();
    });

    prev.addEventListener("click", function () {
      that.navigator.prev();
    });
  }
}