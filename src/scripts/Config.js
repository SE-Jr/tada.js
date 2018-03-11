/*
 * - container/wrapper가 dom이 아니라 그냥 classname? dom으로 할 지 classname인지
 * - || false 같은 기본값 정의는 const DEFAULT OPTION으로 이동
*/
import { DEFAULT_OPTION } from './Consts';

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
    this._showNavigator = _option.showNavigator;
    this._showPagination = _option.showPagination;
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

  set navigator(status) {
    this._showNavigator = status;
  }

  get navigator() {
    return this._showNavigator;
  }

  set pagination(status) {
    this._showPagination = status;
  }

  get pagination() {
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

  set wrapper(wrapper) {
    this._wrapper = wrapper;
  }

  get wrapper() {
    return this._wrapper;
  }
}

export default Config;
