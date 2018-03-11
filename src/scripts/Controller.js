import Navigator from './component/Navigator';
import Pagination from './component/Pagination';
import Container from './component/Container';
import State from './State';
import { next, prev } from './util/Helper';

export default class Controller {
  constructor(config) {
    this._config = config;
    this._state = new State();

    this._renderContainer();
    this._renderNavigator();
    this._renderPagination();
  }

  _renderContainer = () => {
    this._container = new Container(this._config, this._state);
    this._container.render();
  };

  _renderNavigator = () => {
    this._navigator = new Navigator(this._config);
    this._navigator.render();
  };

  _renderPagination = () => {
    this._pagination = new Pagination(this._config, this._state);
    this._pagination.render();
  };

  load() {
    this._bindNavigatorEvents();
    this._bindPaginationEvents();
  }

  _bindNavigatorEvents() {
    this._navigator.nextNavigatorElement.addEventListener('click', () => {
      next(this._state);
      this._container.next();
      this._pagination.next();
    });

    this._navigator.prevNavigatorElement.addEventListener('click', () => {
      prev(this._state);
      this._container.prev();
      this._pagination.prev();
    });
  }

  _bindPaginationEvents() {
    this._pagination.paginationElement.addEventListener('click', (e) => {
      const { target } = e;
      if (target && (target.nodeName === 'LI' || target.nodeName === 'BUTTON')) {
        const page = target.getAttribute('data-slide-index');
        this._container.moveTo(page);
        this._pagination.moveTo(page);
      }
    });
  }

  on = (label, callback) => {
    this._navigator.eventEmitter.addListener(label, callback);
    this._pagination.eventEmitter.addListener(label, callback);
  }
}
