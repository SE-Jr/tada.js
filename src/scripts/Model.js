class Model {
  constructor() {
    this._container = '.slide-wrap';
    this._prevPage = 0;
    this._currentPage = 0;
    this._infinite = true;
    this._navigator = true;
    this._indicator = true;
    this._indicatorShape = 'circle';
    this._selector = '';
    this._slideCnt = 0;
    this._containerWidth = 0;
  }

  set container(container) {
    this._container = container;
  }

  get container() {
    return this._container;
  }

  set prevPage(page) {
    this._prevPage = page;
  }

  get prevPage() {
    return this._prevPage;
  }

  set currentPage(page) {
    this._currentPage = page;
  }

  get currentPage() {
    return this._currentPage;
  }


  set infinite(status) {
    this._infinite = status;
  }

  get infinite() {
    return this._infinite;
  }

  set navigator(status) {
    this._navigator = status;
  }

  get navigator() {
    return this._navigator;
  }

  set indicator(status) {
    this._indicator = status;
  }

  get indicator() {
    return this._indicator;
  }

  set indicatorShape(shape) {
    this._indicatorShape = shape;
  }

  get indicatorShape() {
    return this._indicatorShape;
  }

  set slideCnt(cnt) {
    this._slideCnt = cnt;
  }

  get slideCnt() {
    return this._slideCnt;
  }

  set selector(selector) {
    this._selector = selector;
  }

  get selector() {
    return this._selector;
  }

  set containerWidth(width) {
    this._containerWidth = width;
  }

  get containerWidth() {
    return this._containerWidth;
  }
}

export default Model;