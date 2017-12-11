import '../styles/style.scss'
import Dom from './util/dom'
import Controller from './Controller'
import { CAROUSEL_CONFIG } from './Config'

export default class SlideProjector {
  constructor(option) {
    this.init(option)
  }

  init = (option) => {
      const selector  = option.selector;
      const wrapper = Dom.query(selector);
      const containerWidth = wrapper.offsetWidth;
      const slide = wrapper.children;
      const slideCnt = slide.length;

	  const config = Object.assign({}, CAROUSEL_CONFIG, {
		  selector,
		  containerWidth,
		  slideCnt,
	  });

      this.initContainer(config);
      this.initController(config);
  };

  initContainer = (config) => {
    const container = Dom.createElement('div');
    const wrapper = Dom.query(config.selector);
    const parent = wrapper.parentNode;
    const slide = wrapper.children;

    parent.replaceChild(container, wrapper);
    container.appendChild(wrapper)
    Dom.addClass(container, 'container');
    Dom.addClass(wrapper, 'slide-wrapper');

    container.style.width = config.containerWidth;
    wrapper.style.width = config.containerWidth * config.slideCnt;

    const slideWidth = `${100 / config.slideCnt}%`;

    [...slide].forEach((el) => {
        Dom.addClass(el, 'slide')
        el.style.width = slideWidth

    })
  };

  initController = (config) => {
      new Controller(config);
  };
}
