import { NAVIGATOR_CLASS, NAVIGATOR_PREV_CLASS, NAVIGATOR_NEXT_CLASS } from './config';

export default class Navigator{
    constructor(projector){
        this.projector = projector;
        this.prevButton = this._generatePrevButton();
        this.nextButton = this._generateNextButton();
    }

    init(events){
        this.events = events;
        this.projector.appendChild(this.prevButton);
        this.projector.appendChild(this.nextButton);
        this._bindEvents();
    }

    _generatePrevButton(){
        const prevButton = document.createElement("button");
        prevButton.classList.add(NAVIGATOR_CLASS);
        prevButton.classList.add(NAVIGATOR_PREV_CLASS);
        return prevButton;
    }

    _generateNextButton(){
        const nextButton = document.createElement("button");
        nextButton.classList.add(NAVIGATOR_CLASS);
        nextButton.classList.add(NAVIGATOR_NEXT_CLASS);
        return nextButton;
    }

    _bindEvents(){
        this.prevButton.addEventListener("click", this._onClickPrev.bind(this));
        this.nextButton.addEventListener("click", this._onClickNext.bind(this));
    }

    _onClickNext(){
        this.events.publish("toNext");
    }

    _onClickPrev(){
        this.events.publish("toPrev");
    }
}