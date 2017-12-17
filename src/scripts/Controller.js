import Navigator from './actor/Navigator'
import Indicator from './actor/Indicator'
import Dom from './util/dom'
import EventEmitter from './EventEmitter';

export default class Controller {
  constructor(config) {
    this.config = config;
    this.observable = new EventEmitter();
    this.navigator = new Navigator(this.config, this.observable);
    this.indicator = new Indicator(this.config, this.observable);
  }

  on(label, callback) {
    this.navigator.observer.addListener(label, callback);
    this.indicator.observer.addListener(label, callback);
  }

  init = () => {
    const prev = Dom.query(`${this.config.navigator.prev}`);
    const next = Dom.query(`${this.config.navigator.next}`);

    next.addEventListener("click", () => {
      this.observable.emit('next');
    });

    prev.addEventListener("click", () => {
      this.observable.emit('prev');
    });
  }
}