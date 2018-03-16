import Navigator from './component/Navigator';
import Pagination from './component/Pagination';
import Container from './component/Container';
import State from './State';
import { next, prev, updateCurrentPage } from './util/Helper';

export default class Controller {
  constructor(config) {
    this._config = config;
    this._state = new State();

    this._renderContainer();
    if (this._config.showNavigator) {
      this._renderNavigator();
    }
    if (this._config.showPagination) {
      this._renderPagination();
    }
  }

  _renderContainer = () => {
    this._container = new Container(this._config, this._state);
    this._container.render();
  };

  _renderNavigator = () => {
    this._navigator = new Navigator(this._config, this._state);
    this._navigator.render();
  };

  _renderPagination = () => {
    this._pagination = new Pagination(this._config, this._state);
    this._pagination.render();
  };

  load() {
    if (this._config.showNavigator) {
      this._bindNavigatorEvents();
    }

    if (this._config.showPagination) {
      this._bindPaginationEvents();
    }
  }

  _bindNavigatorEvents() {
    [...this._navigator.elem].forEach(elem => elem.addEventListener('click', (e) => {
      const { target } = e;
      const direction = target.getAttribute('data-direction');
      if (direction === 'right') {
        next(this._state);
      }

      if (direction === 'left') {
        prev(this._state);
      }

      if (this._config.showNavigator) {
        this._navigator.toggle();
      }
      if (this._config.showPagination) {
        this._pagination.move(direction);
      }

      this._container.moveTo();
    }));
  }

  _bindPaginationEvents() {
    this._pagination.elem.addEventListener('click', (e) => {
      const { target } = e;
      if (target && (target.nodeName === 'LI' || target.nodeName === 'BUTTON')) {
        const page = target.getAttribute('data-slide-index');
        updateCurrentPage(this._state, page);
        this._container.moveTo(page);
        this._pagination.moveTo(page);
      }
      if (this._config.showNavigator) {
        this._navigator.toggle();
      }
    });
  }

  on = (label, callback) => {
    if (this._config.showNavigator) {
      this._navigator.eventEmitter.addListener(label, callback);
    }

    if (this._config.showPagination) {
      this._pagination.eventEmitter.addListener(label, callback);
    }
  }
}
