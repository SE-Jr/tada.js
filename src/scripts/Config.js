import { DEFAULT_OPTION } from './Consts';

class Config {
  constructor(option, wrapper) {
    const _option = this._generateOption(option);
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

  _generateOption(option) {
    if (['circle', 'bar'].indexOf(option.paginationShape) === -1) {
      option.paginationShape = 'circle';
    }

    return Object.assign({}, DEFAULT_OPTION, option);
  }

  toJson() {
    return {
      wrapper: this._wrapper,
      containerWidth: this._containerWidth,
      container: this._container,
      slideCount: this._slideCount,
      selector: this._selector,
      paginationShape: this._paginationShape,
      showNavigator: this._showNavigator,
      showPagination: this._showPagination,
      infinite: this._infinite,
    };
  }
}

export default Config;
