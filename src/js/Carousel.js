import '../css/carousel.css'

class Carousel {
    constructor(parent) {
        if(typeof parent != 'string' || !parent) throw "invalid param";
        this.carouselElement = document.querySelector(parent);
    }

    load() {

        this.children = this.carouselElement.children;

        this.elements = Array.prototype.slice.call(this.children).filter((slide) => {
            return slide.offsetParent !== null;
        })

        this.elementsCnt = this.elements.length;

        this.carouselElement.style.width = `${(this.elements.length + 4 ) /  100}%`;


        this._render();

    }
    _render() {

        const parentElement = this.carouselElement.parentNode;
        const carouselWrapper = document.createElement("div");
        carouselWrapper.className = "carousel";
        parentElement.replaceChild(carouselWrapper, this.carouselElement);
        carouselWrapper.appendChild(this.carouselElement);

        this.carouselElement.classList.add("carousel__slider");

        const basis = 100 / (4 + this.elementsCnt);

        this.elements.map((el) => {
            el.classList.add('carousel__slide');
            el.style.flexBasis = `${basis}%`
        })

    }
}

export default Carousel;