import './styles/style.scss';
import { PROJECTOR_CLASS } from './scripts/config';
import Controller from './scripts/controller';

export default class SlideProjector {
  constructor(option) {
    const { selector } = option;
    const projectors = document.querySelectorAll(selector);
    projectors.forEach((projector)=>{
      projector.classList.add(PROJECTOR_CLASS);
      new Controller(projector, option).init();
    });
  }
}

window.SP = SlideProjector;
