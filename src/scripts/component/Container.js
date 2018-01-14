import Dom from '../util/Dom'


//TODO REFACTOR
export default class Container {
  constructor(config) {
    this.config = config;
    this.slideCnt = config.slideCnt;
    this.currentPage = config.currentPage;
    this.wrapper = config.wrapper;
    this.containerWidth = config.containerWidth;
  }

  render() {

    let config = this.config;
    this.container = Dom.createElement('div');
    const wrapper = Dom.query(config.selector);
    const parent = wrapper.parentNode;
    const slide = wrapper.children;

    parent.replaceChild(this.container, wrapper);
    this.container.appendChild(wrapper);
    Dom.addClass(this.container, 'slide-wrap');
    Dom.addClass(wrapper, 'slide');

    this.container.style.width = config.containerWidth;
    wrapper.style.width = config.containerWidth * config.slideCnt;

    const slideWidth = `${100 / config.slideCnt}%`;

    [...slide].forEach((el) => {
      Dom.addClass(el, 'slide-item')
      el.style.width = slideWidth

    })
  }
}