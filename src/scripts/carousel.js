import '../styles/style.scss';
import { PROJECTOR_CLASS, CONTAINER_CLASS, DEFAULT_OPTIONS, ERROR_MESSAGE, INDICATOR_PREV_CLASS, INDICATOR_NEXT_CLASS } from './config';

export default class SlideProjector {
  constructor(option) {
    this.init(option);
    this.initProjector();
    this.setProjectorSize();
    this.wrapInContainer();
    this.addIndicator();
    this.render();
  }

  get currentPage() {
    if (typeof this._currentPage !== "number") {
      this._currentPage = 0;
    }
    return this._currentPage;
  }

  set currentPage(page) {
    if (page < 0) {
      page = 0;
    } else if (page >= this.slideCount) {
      page = this.slideCount - 1;
    }

    if (this._currentPage === page) {
      return page;
    }

    this._currentPage = page;
    this.slideContainer.style.marginLeft = `${-1 * page * this.projectorWidth}px`;

    return this._currentPage;
  }

  init(option) {
    if (!option || typeof option !== 'object') {
      throw new Error(ERROR_MESSAGE.OPTION_REQUIRED);
    }
    if (!option.selector || typeof option.selector !== 'string') {
      throw new Error(ERROR_MESSAGE.INVALID_SELECTOR);
    }
    this.option = Object.assign(DEFAULT_OPTIONS, option);
  }

  initProjector() {
    this.projector = document.querySelector(this.option.selector);
    this.projector.classList.add(PROJECTOR_CLASS);
    this.slideCount = this.projector.children.length;
  }

  setProjectorSize() {
    this.projectorWidth = this.option.width;
    this.projectorHeight = this.option.height;
  }

  wrapInContainer() {
    this.slideContainer = this.generateSlideContainer();
    this.setSlideWidth(this.slideContainer);
    this.fillProjectorWith(this.slideContainer);
  }

  generateSlideContainer() {
    const slideContainer = document.createElement('div');
    const slideContainerWidth = (this.projectorWidth * this.slideCount);
    slideContainer.style.width = `${slideContainerWidth}px`;
    slideContainer.style.height = `${this.projectorHeight}px`;
    slideContainer.classList.add(CONTAINER_CLASS);
    slideContainer.innerHTML = this.projector.innerHTML;

    return slideContainer;
  }

  setSlideWidth(slideContainer) {
    const slides = slideContainer.querySelectorAll('div');
    const slideWidth = `${100 / this.slideCount}%`;
    slides.forEach((slide) => {
      slide.style.width = slideWidth;
    });
  }

  fillProjectorWith(slideContainer) {
    this.projector.innerHTML = '';
    this.projector.appendChild(slideContainer);
  }

  addIndicator() {
    if (this.option.indicator !== true) {
      return;
    }
    this.indicator = this._generatePrevIndicator();
    this._appendIndicator();
    this._addListenerToIndicator();
  }

  _generatePrevIndicator() {
    const prevIndicator = document.createElement('a');
    const nextIndicator = document.createElement('a');
    prevIndicator.classList.add(INDICATOR_PREV_CLASS);
    nextIndicator.classList.add(INDICATOR_NEXT_CLASS);

    return {
      prev: prevIndicator,
      next: nextIndicator
    };
  }

  _appendIndicator() {
    const indicator = this.indicator;
    this.projector.appendChild(indicator.prev);
    this.projector.appendChild(indicator.next);
  }

  _addListenerToIndicator() {
    const indicator = this.indicator;
    indicator.prev.addEventListener('click', this.prev.bind(this));
    indicator.next.addEventListener('click', this.next.bind(this));
  }

  prev() {
    this.currentPage = this.currentPage - 1;
  }

  next() {
    this.currentPage = this.currentPage + 1;
  }

  render() {
    this.projector.style.width = `${this.projectorWidth}px`;
    this.projector.style.height = `${this.projectorHeight}px`;
  }
}
