import { INDICATOR_CLASS } from './config';

export default class Indicator{
    constructor(projector, slideCount){
        this.projector = projector;
        this.slideCount = slideCount; //TODO slideCount 알아서 계산하도록
        this.indicator = this._generateIndicator();
    }

    init(events){
        this.events = events;
        this.projector.appendChild(this.indicator);
        this._bindEvents();
    }

    _generateIndicator(){
        const indicator = document.createElement("ol");
        indicator.classList.add(INDICATOR_CLASS);
        const slideCount = this.slideCount;
        for(let i=0; i<slideCount; i++){
            indicator.appendChild(document.createElement("li"));
        }
        return indicator;
    }

    _bindEvents(){
        this.indicator.addEventListener("click", this._onClick.bind(this));
    }

    _onClick(e){
        const targetIndicator = e.target;
        const targetIndex = this._getIndex(this.indicator, targetIndicator);

        this.events.publish("moveTo", targetIndex);
    }

    //TODO dom util로 분리
    _getIndex(parent, target){
        let targetIndex;
        const siblings = parent.childNodes;
        for(let i=0; i<siblings.length; i++){
            if(siblings[i].isSameNode(target)) {
                targetIndex = i;
            }
        }
        return targetIndex;
    }
}