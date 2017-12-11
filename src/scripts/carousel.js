import '../styles/style.scss';
import { PROJECTOR_CLASS } from './config';
import Controller from './controller';

export default class SlideProjector {
  constructor(option) {
    const { projectorSelector } = option;
    const projectors = document.querySelectorAll(projectorSelector);
    projectors.forEach((projector)=>{
      projector.classList.add(PROJECTOR_CLASS);
      new Controller(projector, option).init();
    });
  }
}
