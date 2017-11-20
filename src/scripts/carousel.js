import "../styles/style.scss";
import { PROJECTOR_CLASS, CONTAINER_CLASS, DEFAULT_OPTIONS, ERROR_MESSAGE } from "./config";
import Navigator from "./navigator";

export default class SlideProjector {
  constructor(option){
    this._init(option);
    this._initProjector();
    this._setProjectorSize();
    this._wrapInContainer();
    this._render();
  }

  _init(option){
    if (!option || typeof option !== "object") {
      throw new Error(ERROR_MESSAGE.OPTION_REQUIRED);
    }
    if (!option.selector || typeof option.selector !== "string") {
      throw new Error(ERROR_MESSAGE.INVALID_SELECTOR);
    }
    this.option = Object.assign(DEFAULT_OPTIONS, option);
  }

  _initProjector(){
    this.projector = document.querySelector(this.option.selector);
    this.projector.classList.add(PROJECTOR_CLASS);
    this.slideCount = this.projector.children.length;
  }

  _setProjectorSize(){
    this.projectorWidth = this.option.width;
    this.projectorHeight = this.option.height;
  }

  _wrapInContainer(){
    const slideContainer = this._generateSlideContainer();
    this._fillProjectorWith(slideContainer);
    this._setSlideWidth(slideContainer);
  }

  _setNavigator(slideContainer){
    const nav = new Navigator(slideContainer, this.slideCount, this.projectorWidth);
    this.projector.appendChild(nav.prevButton);
    this.projector.appendChild(nav.nextButton);
    nav.bindEvents();
  }

  _fillProjectorWith(slideContainer){
    this.projector.innerHTML = "";
    this.projector.appendChild(slideContainer);
    if(this.option.nav.show){
      this._setNavigator(slideContainer);
    }
  }

  _generateSlideContainer(){
    const slideContainer = document.createElement("div");
    const slideContainerWidth = (this.projectorWidth * this.slideCount);
    slideContainer.style.width = `${slideContainerWidth}px`;
    slideContainer.style.height = `${this.projectorHeight}px`;
    slideContainer.classList.add(CONTAINER_CLASS);
    slideContainer.innerHTML = this.projector.innerHTML;

    return slideContainer;
  }

  _setSlideWidth(slideContainer){
    const slides = slideContainer.querySelectorAll("div");
    const slideWidth = `${100 / this.slideCount}%`;
    slides.forEach((slide) => {
      slide.style.width = slideWidth;
    });
  }

  _render(){
    this.projector.style.width = `${this.projectorWidth}px`;
    this.projector.style.height = `${this.projectorHeight}px`;
  }
}
