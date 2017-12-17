import Component from './component';
import { INDICATOR_CLASS, INDICATOR_ITEM_CLASS } from './config';

export default class Indicator extends Component {
  constructor(option, controller) {
    super(option);
    this.init(option, controller);
  }

  _initContainer() {
    const container = document.createElement('ul');
    this.container = container;
    container.classList.add(INDICATOR_CLASS)
    container.innerHTML = this._generateChildrenHTML();
    this.controller.projector.appendChild(container);
  }

  _generateChildrenHTML() {
    const count = this.controller.slideCount;
    let result = '';
    for (let i = 0; i < count; i++) {
      result += `<li class="${INDICATOR_ITEM_CLASS}"><button>${i+1}</button></li>`;
    }
    return result;
  }

}
