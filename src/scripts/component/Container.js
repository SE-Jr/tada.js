import { CLASSNAMES } from '../Consts';

export default class Container {
  constructor(config) {
    this._config = config;
  }

  render() {
    const { wrapper, container, containerWidth, slideCount } = this._config;
    const slideWidth = `${100 / slideCount}%`;
    const slides = container.children;

    //set tada-wrapper
    wrapper.classList.add(CLASSNAMES.wrapper);
    wrapper.style.width = containerWidth;

    //set tada-container
    container.classList.add(CLASSNAMES.container);
    container.style.width = containerWidth * slideCount;

    [...slides].forEach((slideItem) => {
      slideItem.classList.add(CLASSNAMES.slideItem);
      slideItem.style.width = slideWidth;
    });
  }
}
