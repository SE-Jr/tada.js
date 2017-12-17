import '../styles/style.scss';
import { DEFAULT_OPTIONS, ERROR_MESSAGE } from './config';

// constructor(super)는 필수라서 필수템플릿 돼 버림
// 나머지는 구현해놓고 super.로 부를 것
export default class Component {
  constructor(option) {}

  init(option, controller) {
    this._initVariables(controller);
    this._refineOption(option);
    this._initContainer();
    this._initChildren(option);
  }

  _initVariables(controller) {
    this.controller = controller;
    this.container = undefined;
    this.children = [];
    this.option = {};
  }

  _refineOption(option) {
    if (!option || typeof option !== 'object') {
      throw new Error(ERROR_MESSAGE.OPTION_REQUIRED);
    }
    this.option = Object.assign(DEFAULT_OPTIONS, option);
  }

  _initContainer() {}

  _initChildren(option) {}

  resize() {}

  prev() {
    this.moveTo(this.controller.currentSlide - 1);
  }

  next() {
    this.moveTo(this.controller.currentSlide + 1);
  }

  moveTo(destSlide) {
    this.controller.currentSlide = destSlide;
  }
}
