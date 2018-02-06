export default class Container {
  constructor(model) {
    this._model = model;
  }

  render() {
    this.container = document.createElement('div');
    const wrapper = document.querySelector(this._model.selector);
    const parent = wrapper.parentNode;
    const slides = wrapper.children;

    parent.replaceChild(this.container, wrapper);
    this.container.appendChild(wrapper);
    this.container.classList.add('slide-wrap');
    wrapper.classList.add('slide');

    this.container.style.width = this._model.containerWidth;
    wrapper.style.width = this._model.containerWidth * this._model.slideCnt;

    const slideWidth = `${100 / this._model.slideCnt}%`;

    [...slides].forEach((el) => {
      el.classList.add('slide-item');
      el.style.width = slideWidth;
    });
  }
}