import EventEmitter from './EventEmitter'
import Navigator from './Navigator'
import Dom from './util/dom'
import Observer from './Observer'

export default class Controller {

    constructor(config){
        this.config = config
        this.init();
    }

    init() {
        const config = this.config;
        let observable = new EventEmitter();

        const prev = Dom.query(config.navigator.prev);

        const next = Dom.query(config.navigator.next);
        // let observer = new Observer(config, observable);

        let observer = new Navigator(config, observable);


        next.addEventListener("click", function () {
            observable.emit("next");
        });

        prev.addEventListener("click", function () {
            observable.emit("prev");
        });
    }
}