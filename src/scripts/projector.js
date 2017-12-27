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
  }

  init(option) {
    super.init(option);
    this._initContainer();
    this._initVariables();
    this._initChildren(option);
  }

  _initContainer() {
    this.container = document.querySelector(this.option.selector);
    this.container.classList.add(PROJECTOR_CLASS);
  }

  _initVariables() {
    this.slideCount = this.container.children.length;
    this.currentSlide = 0;
  }

  _initChildren(option) {
    this.components = [];

    this.slider = new Slider(option, this.container);
    this.components.push(this.slider);

    if (this.option.navigator) {
      this.components.push(new Navigator(option));
    }
    if (this.option.indicator) {
      this.components.push(new Indicator(option));
    }
  }

  resize() {
    this.components.forEach((component) => {
      component.resize();
    });
  }
}
