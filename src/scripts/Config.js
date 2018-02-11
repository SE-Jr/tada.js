
class Config {
  constructor(option) {
    this._container = option.container;
    this._pagenationShape = option.pagenationShape;
    this._showNavigator = option.showNavigator || false;
    this._showPagination = option.showPagination || false;
  }

  set container(container) {
    this._container = container;
  }

  get container() {
    return this._container;
  }

  set indicatorShape(shape) {
    this._pagenationShape = shape;
  }

  get indicatorShape() {
    return this._pagenationShape;
  }

  set navigator(status) {
    this._showNavigator = status;
  }

  get navigator() {
    return this._showNavigator;
  }

  set indicator(status) {
    this._showPagination = status;
  }

  get indicator() {
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

  set slideCnt(slideCnt) {
    this._slideCnt = slideCnt;
  }

  get slideCnt() {
    return this._slideCnt;
  }

  set wrapper(wrapper) {
    this._wrapper = wrapper;
  }

  get wrapper() {
    return this._wrapper;
  }
}

export default Config;