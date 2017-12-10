export default class Observer {
    constructor(config, subject) {
        this.config = config;
        this.subject = subject;
        this.subject.addListener("next", () => this.next());
        this.subject.addListener("prev", () => this.prev());

    }
    //TODO moveTo 활용
    next() {

    }

    prev() {

    }

    moveTo() {

    }

}