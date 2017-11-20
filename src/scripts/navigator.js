import { NAV_CLASS } from "./config";

export default class Navigator {
  constructor(slideContainer, slideCount, slideWidth){
    this.container = slideContainer;
    this.slideWidth = slideWidth;
    this.slideCount = slideCount;
    this.currentSlideId = 0;
    this.prevButton = this._generatePrevButton();
    this.nextButton = this._generateNextButton();
  }
  
  bindEvents(){
    this.prevButton.addEventListener("click", this._slidePrev.bind(this));
    this.nextButton.addEventListener("click", this._slideNext.bind(this));
  }
  
  _slidePrev(){
    if(this.currentSlideId === 0){
      return;
    }
    const targetSlideId = this.currentSlideId - 1;
    const currentPosition = this.slideWidth * this.currentSlideId;
    const targetPosition = -currentPosition + this.slideWidth;
    this.currentSlideId = targetSlideId;
    this.container.style.transform = `translateX(${targetPosition}px)`;
  }
  
  _slideNext(){
    if(this.currentSlideId === (this.slideCount-1)){
      return;
    }
    const targetSlideId = this.currentSlideId + 1;
    const currentPosition = this.slideWidth * this.currentSlideId;
    const targetPosition = -currentPosition - this.slideWidth;
    this.currentSlideId = targetSlideId;
    this.container.style.transform = `translateX(${targetPosition}px)`;
  }
  
  _generatePrevButton(){
    const prevButton = document.createElement("button");
    prevButton.innerHTML = "&#8249;";
    prevButton.className = NAV_CLASS.PREV_BUTTON;
    return prevButton;
  }
  
  _generateNextButton(){
    const nextButton = document.createElement("button");
    nextButton.innerHTML = "&#8250;";
    nextButton.className = NAV_CLASS.NEXT_BUTTON;
    return nextButton;
  }
}