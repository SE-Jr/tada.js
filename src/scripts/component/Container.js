import { CLASSNAMES } from '../Consts';

export default class Container {
  constructor(config) {
    this._config = config;
  }

  render() {
    const { wrapper, container, containerWidth, slideCount } = this._config;
    container.classList.add(CLASSNAMES.container);
    wrapper.classList.add(CLASSNAMES.wrapper);

    wrapper.style.width = containerWidth;
    container.style.width = containerWidth * slideCount;

    const slideWidth = `${100 / slideCount}%`;
    const slides = container.children;
    [...slides].forEach((slideItem) => {
      slideItem.classList.add(CLASSNAMES.slideItem);
      slideItem.style.width = slideWidth;
    });
  }
}