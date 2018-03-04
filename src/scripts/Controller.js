import Navigator from './component/Navigator';
import Pagination from './component/Pagination';
import Container from './component/Container';
import State from './State';

import { next, prev } from "./util/Helper";

export default class Controller {
  constructor(config) {
    this._config = config;
    this._state = new State();

    this._renderContainer();
    this._renderNavigator();
    this._renderIndicator();
  }

  _renderContainer = () => {
    this.container = new Container(this._config);
    this.container.render();
  };

  _renderNavigator = () => {
    if(this._config._showNavigator) {
      this._navigator = new Navigator(this._config, this._state);
      this._navigator.render();
    }
  };

  _renderIndicator = () => {
    if(this._config._showPagination) {
      this._pagination = new Pagination(this._config, this._state);
      this._pagination.render();
    }
  };

  load() {
    if(this._config.showNavigator) {
      const prevButton = document.querySelector('.navigator-left');
      const nextButton = document.querySelector('.navigator-right');

      nextButton.addEventListener("click", () => {
        next(this._state);
        this._navigator.next();
        this._pagination.next();

      });

      prevButton.addEventListener("click", () => {
        prev(this._state);
        this._navigator.prev();
        this._pagination.prev();
      });
    }

    if(this._config.showPagination) {
      const indicator = document.querySelector('.slide-indicator');

      indicator.addEventListener("click", (e) => {
        if(e.target && (e.target.nodeName === "LI" || e.target.nodeName === "BUTTON")) {
          const page = e.target.getAttribute('data-slide-index')
          this._navigator.moveTo(page);
          this._pagination.moveTo(page);
        }
      })
    }
  }

  on = (label, callback) => {
    if(this._config.showNavigator) {
      this._navigator._evetnEmitter.addListener(label, callback);
    }
    if(this._config.showPagination) {
      this._pagination._evetnEmitter.addListener(label, callback);
    }
  }
}
