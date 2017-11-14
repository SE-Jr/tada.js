import "../styles/style.scss";
import { VERSION } from "./config";

export default class Carousel {
  constructor(options = {}) {
    this.initOption(options);
    this.render();
  }

  initOption({
    selector = {},
    style = {}
  }) {
    this.selector = Object.assign({
      container: ".carousel-container",
      wrapper: ".carousel-wrapper",
      item: ".carousel-item"
    }, selector);

    this.style = Object.assign({
      width: "500px",
      height: "300px"
    }, style);
  }

  render() {
    const containers = document.querySelectorAll(this.selector.container);
    containers.forEach((container) => this._renderCarousel(container));
  }

  _renderCarousel(container) {
    const width = this.style.width;
    const height = this.style.height;

    container.style.width = width;
    container.style.height = height;

    const items = document.querySelectorAll(this.selector.item);

    const wrapper = document.createElement("div");
    wrapper.classList.add(this.selector.wrapper.slice(1));
    wrapper.style.width = (items.length * 100) + '%';
    wrapper.style.height = height;

    items.forEach((item) => {
      item.style.width = (100 / items.length) + '%'
      item.style.height = height;
      wrapper.appendChild(item)
    });
    container.appendChild(wrapper);
  }
}
