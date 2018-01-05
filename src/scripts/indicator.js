import Component from './component';
import { INDICATOR_CLASS, INDICATOR_ITEM_CLASS, INDICATOR_ITEM_CIRCLE_CLASS } from './config';

export default class Indicator extends Component {
  constructor(option, controller) {
    super(option);
    this.init(option, controller);
  }

  _refineOption(option) {
    super._refineOption(option);
    if (option.indicator === true) {
      this.option.indicator = 'circle';
    }

    if (this.option.indicator === 'circle') {
      this.option.itemOptionSelector = INDICATOR_ITEM_CIRCLE_CLASS;
    }
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
      result += `<li class="${INDICATOR_ITEM_CLASS} ${this.option.itemOptionSelector}"><button>${i+1}</button></li>`;
    }
    return result;
  }

  _attachEvent() {
    this.container.addEventListener('click', this._handleClick.bind(this));
  }

  _handleClick(e) {
    e.preventDefault();

    const itemClassSelector = `.${INDICATOR_ITEM_CLASS}`;
    const item = e.target.closest(itemClassSelector);
    if (!item) {
      return;
    }

    const itemIndex = this._getIndexOf(item);
    this._moveTo(itemIndex);
  }

  _getIndexOf(item) {
    let index = 0;
    for (let currentItem = item; (currentItem = currentItem.previousSibling) != null;) {
      index++;
    }
    return index;
  }
}
