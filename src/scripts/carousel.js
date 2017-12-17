import '../styles/style.scss';
import { PROJECTOR_CLASS, CONTAINER_CLASS, DEFAULT_OPTIONS, ERROR_MESSAGE } from './config';
import Component from './component';
import Navigator from './navigator';
import Indicator from './indicator';

export default class SlideProjector extends Component {
  constructor(option) {
    super(option);
    this.initProjector();
    this.setProjectorSize();
    this.wrapInContainer();
    this.render();
  }

  init(option) {
    super.init(option);
    this._addComponents(option);
  }

  _addComponents(option) {
    this.components = [];
    const {indicator, navigator} = this.option;

    if (navigator) {
      this.components.push(new Navigator(option));
    }
    if (indicator) {
      this.components.push(new Indicator(option));
    }
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
    const slideContainer = this.generateSlideContainer();
    this.setSlideWidth(slideContainer);
    this.fillProjectorWith(slideContainer);
  }

  fillProjectorWith(slideContainer) {
    this.projector.innerHTML = '';
    this.projector.appendChild(slideContainer);
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

  render() {
    this.projector.style.width = `${this.projectorWidth}px`;
    this.projector.style.height = `${this.projectorHeight}px`;
  }
}
