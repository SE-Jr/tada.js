import Component from './component';
import { NAVIGATOR_CLASS, NAVIGATOR_PREV_CLASS, NAVIGATOR_NEXT_CLASS,
  NAVIGATOR_PREV_PHRASE, NAVIGATOR_NEXT_PHRASE } from './config';

export default class Navigator extends Component {
  constructor(option, controller) {
    super(option);
    this.init(option, controller);
  }

  init(option, controller) {
    super.init(option, controller);
    this._attachEvent();
  }

  _initVariables(controller) {
    super._initVariables(controller);
    this.prevContainer = undefined;
    this.nextContainer = undefined;
  }

  _initChildren(option) {
  	const tempGenerator = document.createElement('div');
    tempGenerator.innerHTML =
      `<a href="#" class="${NAVIGATOR_CLASS} ${NAVIGATOR_PREV_CLASS}">${NAVIGATOR_PREV_PHRASE}</a>` +
      `<a href="#" class="${NAVIGATOR_CLASS} ${NAVIGATOR_NEXT_CLASS}">${NAVIGATOR_NEXT_PHRASE}</a>`;

    this.prevContainer = tempGenerator.querySelector(`.${NAVIGATOR_PREV_CLASS}`);
    this.nextContainer = tempGenerator.querySelector(`.${NAVIGATOR_NEXT_CLASS}`);

    this.children.push(this.prevContainer, this.nextContainer);

    this.controller.projector.appendChild(this.prevContainer);
    this.controller.projector.appendChild(this.nextContainer);
  }

  _attachEvent() {
    this.prevContainer.addEventListener('click', this._prev.bind(this));
    this.nextContainer.addEventListener('click', this._next.bind(this));
  }
}
