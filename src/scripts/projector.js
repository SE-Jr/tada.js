import '../styles/style.scss';
import { PROJECTOR_CLASS } from './config';
import Component from './component';
import Slider from './slider';
import Navigator from './navigator';
import Indicator from './indicator';

export default class SlideProjector extends Component {
  constructor(option) {
    super(option);
    this.init(option);
    this.resize();
    this.moveTo(0);
  }

  _initVariables() {
    super._initVariables(this);
    this.slideCount = 0;
    this.currentSlide = 0;
    this.width = 0;
    this.height = 0;
    // 드러낼 변수는 아니라서 initVariables에서 안해도..?
    this.slider = undefined;
  }

  _refineOption(option) {
    super._refineOption(option);
    if (typeof option.projectorSelector !== 'string') {
      throw new Error(ERROR_MESSAGE.INVALID_SELECTOR);
    }
  }

  _initContainer() {
    const container = document.querySelector(this.option.projectorSelector);
    this.container = container;
    this.controller.projector = container;
    container.classList.add(PROJECTOR_CLASS);
    
    this.slideCount = container.children.length;
    this.width = container.offsetWidth;
    this.height = container.offsetHeight;
  }

  _initChildren(option) {
    const slider = new Slider(option, this);
    // this.slider = slider;
    // this.container.appendChild(slider.container);
    this.children.push(slider);

    if (this.option.navigator) {
      this.children.push(new Navigator(option, this));
    }
    if (this.option.indicator) {
      this.children.push(new Indicator(option, this));
    }
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;

    this.children.forEach((child) => {
      child.resize();
    });
  }

  moveTo(destSlide) {
    this.currentSlide = destSlide;
    this.children.forEach((child) => {
      child.moveTo(destSlide);
    });
  }
}
