import { DEFAULT_OPTION } from "./Consts";

class Config {
  constructor(option, wrapper) {
    const _option = Object.assign({}, DEFAULT_OPTION, option);

    this._wrapper = wrapper;
    this._containerWidth = wrapper.clientWidth;
    const [first] = wrapper.children;
    this._container = first;
    this._slideCount = this._container.children.length;
    this._selector = _option.selector;
    this._paginationShape = _option.paginationShape;
    this._showNavigator = _option.navigator;
    this._showPagination = _option.pagination;
    this._infinite = false;
  }

  set container(container) {
    this._container = container;
  }

  get container() {
    return this._container;
  }

  set paginationShape(shape) {
    this._paginationShape = shape;
  }

  get paginationShape() {
    return this._paginationShape;
  }

  set showNavigator(status) {
    this._showNavigator = status;
  }

  get showNavigator() {
    return this._showNavigator;
  }

  set showPagination(status) {
    this._showPagination = status;
  }

  get showPagination() {
    return this._showPagination;
  }

  set selector(selector) {
    this._selector = selector;
  }

  get selector() {
    return this._selector;
  }

  set containerWidth(containerWidth) {
    this._containerWidth = containerWidth;
  }

  get containerWidth() {
    return this._containerWidth;
  }

  set slideCount(slideCount) {
    this._slideCount = slideCount;
  }

  get slideCount() {
    return this._slideCount;
  }

  get infinite() {
    return this._infinite;
  }

  set wrapper(wrapper) {
    this._wrapper = wrapper;
  }

  get wrapper() {
    return this._wrapper;
  }

  toJson() {
    return {
      wrapper: this.wrapper,
      containerWidth: this.containerWidth,
      container: this.container,
      slideCount: this.slideCount,
      selector: this.selector,
      paginationShape: this.paginationShape,
      showNavigator: this.showNavigator,
      showPagination: this.showPagination,
      infinite: this.infinite,
    };
  }
}

export default Config;
