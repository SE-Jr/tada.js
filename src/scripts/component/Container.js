import {SLIDE_CLASSES} from '../Consts';

export default class Container {
  constructor(config) {
    this._config = config;
  }

  render() {
    this.container = document.createElement('div');
    this._config.elContainer = this.container;
    const wrapper = this._config.wrapper;
    const parent = wrapper.parentNode;
    const slides = wrapper.children;

    parent.replaceChild(this.container, wrapper);
    this.container.appendChild(wrapper);
    this.container.classList.add(this._config.container);
    wrapper.classList.add(SLIDE_CLASSES.slides);

    this.container.style.width = this._config.containerWidth;
    wrapper.style.width = this._config.containerWidth * this._config.slideCount;

    const slideWidth = `${100 / this._config.slideCount}%`;

    [...slides].forEach((el) => {
      el.classList.add(SLIDE_CLASSES.slideItem);
      el.style.width = slideWidth;
    });
  }
}
