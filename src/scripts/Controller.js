import Navigator from './component/Navigator'
import Indicator from './component/Indicator'
import Dom from './util/dom'

export default class Controller {
  constructor(config) {
    this.config = config;
    //TODO refactor
    this.navigator = new Navigator(this.config);
    this.indicator = new Indicator(this.config);
  }

  load() {
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


    const indicator = Dom.query('.slide-indicator');

    indicator.addEventListener("click", (e) => {
      if(e.target && (e.target.nodeName === "LI" || e.target.nodeName === "BUTTON")) {
        const page = e.target.getAttribute('data-slide-index')
        this.navigator.moveTo(page);
        this.indicator.moveTo(page);
      }
    })

  }
}