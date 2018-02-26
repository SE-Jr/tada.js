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
    this._container = new Container(this._config);
    this._container.render();
  };

  _renderNavigator = () => {
    this._navigator = new Navigator(this._config, this._state);
    this._navigator.render();
  };

  _renderIndicator = () => {
    this._pagination = new Pagination(this._config, this._state);
    this._pagination.render();
  };

  load() {
    const prevButton = document.querySelector('.navigator-left');
    const nextButton = document.querySelector('.navigator-right');

    nextButton.addEventListener("click", () => {
      next(this._state, this._config);
      this._navigator.next();
      this._pagination.next();

    });

    prevButton.addEventListener("click", () => {
      prev(this._state, this._config);
      this._navigator.prev();
      this._pagination.prev();
    });


    const indicator = document.querySelector('.slide-indicator');

    indicator.addEventListener("click", (e) => {
      if(e.target && (e.target.nodeName === "LI" || e.target.nodeName === "BUTTON")) {
        const page = e.target.getAttribute('data-slide-index')
        this._navigator.moveTo(page);
        this._pagination.moveTo(page);
      }
    })
  }

  on = (label, callback) => {
    this._navigator._evetnEmitter.addListener(label, callback);
    this._pagination._evetnEmitter.addListener(label, callback);
  }
}