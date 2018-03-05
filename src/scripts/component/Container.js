import { CLASSNAMES } from '../Consts';

export default class Container {
  constructor(config, state) {
    this._config = config;
    this._state = state;
    this._containerWidth = config.containerWidth;
    this.containerElement = config.container;
  }

  /** TODO
  /* 이름은 next()인데 실제로 페이지 수를 변경하는 건 util/Helper에서 끝난 상태라
  /* next/prev가 사실상 같은 내용이 되어 버렸...
  **/
  next() {
    this.moveTo(this._state.currentPage);
  }

  prev() {
    this.moveTo(this._state.currentPage);
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

  moveTo(page) {
    this.containerElement.style.transform = `translateX(${-1 * page * this._containerWidth}px)`;
  }
}
