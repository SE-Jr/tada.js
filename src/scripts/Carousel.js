import '../styles/carousel.scss'
class Carousel {
    constructor(option) {
        if(typeof option != 'object' || !option) throw "invalid param";
        const { selector, width, height } = option;
        if(typeof selector != 'string' || !selector) throw "invalid selector";
        this.carouselWrapper = document.querySelector(selector);
        this.carouselWidth = width || '500';
        this.carouselHeight = height || '300';

    }

    load() {
        this.children = Array.prototype.slice.call(this.carouselWrapper.children).filter((slide) => {
            return slide.offsetParent !== null;
        })

        this.childrenCount = this.children.length;
        this.totalCarouselWidth = this.childrenCount * this.carouselWidth
        const carouselParent = document.createElement("div");
        carouselParent.className = "carousel"

        const parentNode = this.carouselWrapper.parentNode;
        parentNode.replaceChild(carouselParent, this.carouselWrapper);
        carouselParent.appendChild(this.carouselWrapper)

        carouselParent.style.width =  `${this.carouselWidth}px`;
        carouselParent.style.height = `${this.carouselHeight}px`;

        this._render();

    }
    _render() {
        this.carouselWrapper.classList.add('carousel__slider');
        this.carouselWrapper.style.width = `${this.totalCarouselWidth}px`;
        this.carouselWrapper.style.marginLeft = `${-1 *  this.carouselWidth}px` ;

        this.children.map((el) => {
            el.classList.add('carousel__slide');
        })

    }
}

export default Carousel;