import dom from './util/dom';

class Navigator {
    constructor() {
        this.prevButton = dom.createElement('button');
        this.prevButton.innerHTML = '&#x2039';
        this.nextButton = dom.createElement('button');
        this.nextButton.innerHTML = '&#x203a;';
    }

    appendTo(element) {
        element.appendChild(this.prevButton);
        element.appendChild(this.nextButton);
    }
}

export default Navigator