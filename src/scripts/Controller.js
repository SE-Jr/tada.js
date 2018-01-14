import Navigator from './component/Navigator'
import Indicator from './component/Indicator'
import Dom from './util/dom'
import { next, prev } from "./util/Helper";


//TODO refactor 변경된 model을 store에 저장했다가 가져와서 inject 해줄수 있는 방법이 없을까?.?
export default class Controller {
  constructor(model) {
    this.model = model;
    this.navigator = new Navigator(this.model);
    this.indicator = new Indicator(this.model);
  }

  load() {
    const prevButton = Dom.query('.navigator-left');
    const nextButton = Dom.query('.navigator-right');

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