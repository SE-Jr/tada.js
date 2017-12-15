import Component from './component';
import { SLIDER_CLASS, SLIDE_CLASS } from './config';

export default class Slider extends Component {
  constructor(option, controller) {
  	super(option);
    this.init(option, controller);
  }

  _refineOption(option) {
    super._refineOption(option);
    if (typeof option.slideSelector !== 'string') {
      throw new Error(ERROR_MESSAGE.INVALID_SELECTOR);
    }
  }

  _initContainer() {
  	const container = document.createElement('div');
    this.container = container;
    container.classList.add(SLIDER_CLASS);
  }

  _initChildren() {
    const projector = document.querySelector(this.option.projectorSelector);
    const slides = projector.querySelectorAll(this.option.slideSelector);
    const container = this.container;

    slides.forEach((slide) => {
      slide.classList.add(SLIDE_CLASS);
      container.appendChild(slide);
      this.children.push(slide);
    });

    projector.appendChild(container);
  }

  resize() {
    const container = this.container;
    const controller = this.controller;

    const width = controller.width;
    const height = controller.height;

    container.style.width = `${width * this.children.length}px`;
    container.style.height = `${height}px`;

    this.children.forEach((child) => {
      child.style.width = `${width}px`;
      child.style.height = `${height}px`;
    });
  }

  moveTo(destSlide) {
    this.container.style.transform = `translateX(${-this.slideWidth * destSlide}px)`;
  }
}
