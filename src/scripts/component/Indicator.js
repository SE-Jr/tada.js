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
    document.querySelector('.slide-indicator-button.active').classList.remove('active');
    const button = document.querySelector(`button[data-slide-index="${page}"]`);
    button.classList.add('active');
  }

  render() {

    const ul = document.createElement('ul');
    ul.classList.add('slide-indicator', `indicator-${this._model.indicatorShape}`);


    //TODO REFACTOR

    for(let i = 0 ; i < this._model.slideCnt; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      li.classList.add('slide-indicator-item');
      const button = document.createElement('button');
      li.appendChild(button);
      li.setAttribute('data-slide-index', `${i}`);

      button.classList.add('slide-indicator-button')
      button.setAttribute('data-slide-index', `${i}`);

      if (i === 0) {
        button.classList.add('active');
      }
    }

    const container = document.querySelector('.slide-wrap');
    container.appendChild(ul);
  }
}

export default Indicator