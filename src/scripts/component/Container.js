import Dom from "../util/Dom"


export default class Container {
  constructor(model) {
    this._model = model;
  }

  render() {

    this.container = Dom.createElement('div');
    const wrapper = Dom.query(this._model.selector);
    const parent = wrapper.parentNode;
    const slides = wrapper.children;

    parent.replaceChild(this.container, wrapper);
    this.container.appendChild(wrapper);
    Dom.addClass(this.container, 'slide-wrap');
    Dom.addClass(wrapper, 'slide');

    this.container.style.width = this._model.containerWidth;
    wrapper.style.width = this._model.containerWidth * this._model.slideCnt;

    const slideWidth = `${100 / this._model.slideCnt}%`;

    [...slides].forEach((el) => {
      Dom.addClass(el, 'slide-item')
      el.style.width = slideWidth;
    });
  }
}