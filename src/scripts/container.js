import { CONTAINER_CLASS } from './config';

export default class Container{
    constructor(projector){
        this.projector = projector;
        this.projectorWidth = this.projector.clientWidth;
        this.projectorHeight = this.projector.clientHeight;
        this.slides = Array.from(this.projector.children);
        this.slideCount = this.slides.length;
        this.containerWidth = this.projectorWidth * this.slideCount;
        this.containerHeight = this.projectorHeight;
        this.currentSlideId = 0;
    }

    init(events){
        this.events = events;
        this._setSlideSize();
        this._fillProjectorWithContainer();
        this._bindEvents();
        return this;
    }

    _setSlideSize(){
        const slideWidth = this.projectorWidth;
        const slideHeight = this.projectorHeight;
        this.slides.forEach((slide) => {
            slide.style.width = slideWidth;
            slide.style.height = slideHeight;
        });
    }

    _fillProjectorWithContainer(){
        this.container = document.createElement("div");
        this.container.style.width = this.containerWidth;
        this.container.style.height = this.containerHeight;
        this.container.classList.add(CONTAINER_CLASS);
        this.container.innerHTML = this.projector.innerHTML;
        this.projector.innerHTML = "";
        this.projector.appendChild(this.container);
    }

    _bindEvents(){
        this.events.subscribe("moveTo", this.moveTo.bind(this));
        this.events.subscribe("toNext", this.toNext.bind(this));
        this.events.subscribe("toPrev", this.toPrev.bind(this));
    }

    moveTo(targetId){
        console.log("moveTo : ", targetId);
        this.currentSlideId = targetId;
        const targetPosition = this.projectorWidth * targetId;
        this.container.style.transform = `translateX(${-targetPosition}px)`;
    }

    toNext(){
        console.log("toNext");
        if(this.currentSlideId === (this.slideCount-1)){
            return;
        }
        const targetSlideId = this.currentSlideId + 1;
        const currentPosition = this.projectorWidth * this.currentSlideId;
        const targetPosition = -currentPosition - this.projectorWidth;
        this.currentSlideId = targetSlideId;
        this.container.style.transform = `translateX(${targetPosition}px)`;
    }

    toPrev(){
        console.log("toPrev");
        if(this.currentSlideId === 0){
            return;
        }
        const targetSlideId = this.currentSlideId - 1;
        const currentPosition = this.projectorWidth * this.currentSlideId;
        const targetPosition = -currentPosition + this.projectorWidth;
        this.currentSlideId = targetSlideId;
        this.container.style.transform = `translateX(${targetPosition}px)`;
    }
}