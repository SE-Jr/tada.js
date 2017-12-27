import Component from './component';
import { SLIDER_CLASS, SLIDE_CLASS } from './config';

export default class Slider extends Component {
  constructor(option, parent) {
  	super(option);
    this.init(option, parent);
  }

  init(option, parent) {
    this._initContainer(parent);
  }

  _initContainer(parent) {
  	const container = document.createElement('div');
  	container.classList.add(SLIDER_CLASS);

    this.children = [];
    while(parent.childElementCount) {
      const child = parent.firstElementChild;
      child.classList.add(SLIDE_CLASS);
      container.appendChild(child);
      this.children.push(child);
    }
    parent.appendChild(container);

    this.container = container;
    this.parent = parent;
  }

  resize() {
    const container = this.container;
    const parent = this.parent;

    const width = parent.offsetWidth;
    const height = parent.offsetHeight;

    container.style.width = `${width * this.children.length}px`;
    container.style.height = `${height}px`;

    this.children.forEach((child) => {
      child.style.width = `${width}px`;
      child.style.height = `${height}px`;
    });
  }
}
