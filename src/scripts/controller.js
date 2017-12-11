import Events from './event';
import Container from './container';
import Indicator from './indicator';
import Navigator from './navigator';

export default class Controller{
    constructor(projector, option){
        this.projector = projector;
        this.option = option;
        this.events = new Events();
    }

    init(){
        const { projector, events } = this;
        this.container = new Container(projector).init(events);
        this.navigator = new Navigator(projector).init(events);
        this.indicator = new Indicator(projector, this.container.slideCount).init(events);
    }
}