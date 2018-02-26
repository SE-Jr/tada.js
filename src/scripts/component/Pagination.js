import EventEmitter from '../EventEmitter';

class Pagination {
  constructor(config, state){
    this._evetnEmitter = new EventEmitter();
    this._config = config;
    this._state = state;
  }

  next() {
    this.moveTo(this._state.currentPage);
    this._evetnEmitter.emit('next');
  }

  prev() {
    this.moveTo(this._state.currentPage);
    this._evetnEmitter.emit('prev');
  }

  moveTo(page) {
    document.querySelector('.slide-pagination-button.active').classList.remove('active');
    const button = document.querySelector(`button[data-slide-index="${page}"]`);
    button.classList.add('active');
  }

  render() {

    const ul = document.createElement('ul');
    ul.classList.add('slide-pagination', `pagination-${this._config.paginationShape}`);


    //TODO REFACTOR

    for(let i = 0 ; i < this._config.slideCount; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      li.classList.add('slide-pagination-item');
      const button = document.createElement('button');
      li.appendChild(button);
      li.setAttribute('data-slide-index', `${i}`);

      button.classList.add('slide-pagination-button')
      button.setAttribute('data-slide-index', `${i}`);

      if (i === 0) {
        button.classList.add('active');
      }
    }

    const wrapper = document.querySelector('.slide-wrapper');
    wrapper.appendChild(ul);
  }
}

export default Pagination