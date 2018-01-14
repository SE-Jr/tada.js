import Dom from '../util/Dom'
import EventEmitter from '../EventEmitter';
import Component from './Component';

class Indicator extends Component{
  constructor(config){
    super(config)
    this.observable = new EventEmitter();
    this.config = config;
  }

  next() {
    super.next();
    this.moveTo(this.slideIdx);
    this.observable.emit('next');
  }

  prev() {
    super.prev();
    this.moveTo(this.slideIdx);
    this.observable.emit('prev');
  }

  moveTo(page) {
    Dom.removeClass(Dom.query('.slide-indicator-button.active'), 'active');
    const button = Dom.query(`button[data-slide-index="${page}"]`)
    Dom.addClass(button, 'active')
  }

  render() {

    const ul = Dom.createElement('ul');

    Dom.addClass(ul, 'slide-indicator')
    Dom.addClass(ul, `indicator-${this.config.indicatorShape}`)

    //TODO REFACTOR

    for(let i = 0 ; i < this.config.slideCnt; i++) {
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