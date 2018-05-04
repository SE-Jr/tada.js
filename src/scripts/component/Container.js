import { CLASSNAMES } from "../Consts";

export default class Container {
    constructor(config, state) {
        this._config = config;
        this._state = state;
        this._containerWidth = config.containerWidth;
        this.containerElement = config.container;
        this.wrapperElement = config.wrapper;
    }

    render() {
        const { containerWidth, slideCount } = this._config;
        const slideWidth = `${100 / slideCount}%`;
        const slides = this.containerElement.children;

        this.wrapperElement.classList.add(CLASSNAMES.wrapper);
        this.wrapperElement.style.width = `${containerWidth}px`;

        this.containerElement.classList.add(CLASSNAMES.container);
        this.containerElement.style.width = `${containerWidth * slideCount}px`;

        [...slides].forEach((slideItem) => {
            slideItem.classList.add(CLASSNAMES.slideItem);
            slideItem.style.width = slideWidth;
        });
    }

    moveTo(page = this._state.currentPage) {
        this.containerElement.style.transform = `translateX(${-1 * page * this._containerWidth}px)`;
    }
}
