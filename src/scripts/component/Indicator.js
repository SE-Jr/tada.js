import Dom from '../util/Dom'
import EventEmitter from '../EventEmitter';

class Indicator {
  constructor(model){
    this._evetnEmitter = new EventEmitter();
    this._model = model;
  }

  next() {
    this.moveTo(this._model.currentPage);
    this._evetnEmitter.emit('next');
  }

  prev() {
    this.moveTo(this._model.currentPage);
    this._evetnEmitter.emit('prev');
  }

  moveTo(page) {
    Dom.removeClass(Dom.query('.slide-indicator-button.active'), 'active');
    const button = Dom.query(`button[data-slide-index="${page}"]`)
    Dom.addClass(button, 'active');
  }

  render() {

    const ul = Dom.createElement('ul');

    Dom.addClass(ul, 'slide-indicator')
    Dom.addClass(ul, `indicator-${this._model.indicatorShape}`)

    //TODO REFACTOR

    for(let i = 0 ; i < this._model.slideCnt; i++) {
      const li = Dom.createElement('li');
      ul.appendChild(li);
      Dom.addClass(li, 'slide-indicator-item')
      const button = Dom.createElement('button');
      li.appendChild(button);
      li.setAttribute('data-slide-index', `${i}`);

      Dom.addClass(button, 'slide-indicator-button')
      button.setAttribute('data-slide-index', `${i}`);

      if (i === 0) {
        Dom.addClass(button, 'active')
      }
    }

    const container = Dom.query('.slide-wrap');
    container.appendChild(ul);
  }
}

export default Indicator