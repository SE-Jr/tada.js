import Dom from './util/Dom'

export default class Container {
  constructor(config) {
    this.config = config;
    this.slideCnt = config.slideCnt;
    this.currentPage = config.currentPage;
  }

  init() {
    this._generateContainer();
    this._generateNavigator();
    this._generateIndicator();
  }

  _generateContainer() {

    let config = this.config;
    this.container = Dom.createElement('div');
    const wrapper = Dom.query(config.selector);
    const parent = wrapper.parentNode;
    const slide = wrapper.children;

    parent.replaceChild(this.container, wrapper);
    this.container.appendChild(wrapper);
    Dom.addClass(this.container, `slide-wrap-${config.selector}`);
    Dom.addClass(wrapper, 'slide');

    this.container.style.width = config.containerWidth;
    wrapper.style.width = config.containerWidth * config.slideCnt;

    const slideWidth = `${100 / config.slideCnt}%`;

    [...slide].forEach((el) => {
      Dom.addClass(el, 'slide-item')
      el.style.width = slideWidth

    })
  }

  _generateNavigator() {
    const next = Dom.createElement('a');
    const prev = Dom.createElement('a');

    Dom.addClass(next, 'slide-navigator');
    Dom.addClass(next, 'navigator-right');

    Dom.addClass(prev, 'slide-navigator');
    Dom.addClass(prev, 'navigator-left');


    this.container.appendChild(next);
    this.container.appendChild(prev);
  }

  _generateIndicator() {
    const ul = Dom.createElement('ul');

    Dom.addClass(ul, 'slide-indicator')
    Dom.addClass(ul, 'indicator-circle')

    //TODO REFACTOR

    for(let i = 0 ; i < this.slideCnt; i++) {
      const li = Dom.createElement('li');
      ul.appendChild(li);
      Dom.addClass(li, 'slide-indicator-item')
      const button = Dom.createElement('button');
      li.appendChild(button);
      Dom.addClass(button, 'slide-indicator-button')
      button.setAttribute('data-slide-index', `${i}`);
    }

    this.container.appendChild(ul);
  }


}