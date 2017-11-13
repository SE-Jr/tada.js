import "../styles/style.scss";
import { PROJECTOR_CLASS, CONTAINER_CLASS, defaultOption } from "./config";

export default class SlideProjector {
  constructor(option = {}){
    this._initProjector(option);
    this._setProjectorSize(option);
    this._wrapInContainer();
    this._render();
  }

  _initProjector(option){
    this.projector = document.querySelector(option.selector);
    this.projector.classList.add(PROJECTOR_CLASS);
    this.slideCount = this.projector.children.length;
  }

  _setProjectorSize(option){
    this.projectorWidth = option.width || defaultOption.width;
    this.projectorHeight = option.height || defaultOption.height;
  }

  _wrapInContainer(){
    const slideContainer = this._generateSlideContainer();
    this._setSlideWidth(slideContainer);
    this._fillProjectorWith(slideContainer);
  }

  _fillProjectorWith(slideContainer){
    this.projector.innerHTML = "";
    this.projector.appendChild(slideContainer);
  }

  _generateSlideContainer(){
    const slideContainer = document.createElement("div");
    const slideContainerWidth = (this.projectorWidth * this.slideCount);
    slideContainer.style.width = slideContainerWidth + "px";
    slideContainer.style.height = this.projectorHeight + "px";
    slideContainer.classList.add(CONTAINER_CLASS);
    slideContainer.innerHTML = this.projector.innerHTML;

    return slideContainer;
  }

  _setSlideWidth(slideContainer){
    const slides = slideContainer.querySelectorAll("div");
    const slideWidth = (100 / this.slideCount) + "%";
    for (const slide of slides) {
      slide.style.width = slideWidth;
    }
  }

  _render(){
    this.projector.style.width = this.projectorWidth + "px";
    this.projector.style.height = this.projectorHeight + "px";
  }
}
