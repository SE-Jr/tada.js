import { VERSION } from "./config";

export default class Carousel {
  constructor(option = {}){
    this.width = 600; //option.width
    this.height = 400; //option.height

    this.renderCarousel(document.body);
  }

  renderCarousel(targetElement){
    let wrapper = document.createElement("div");
    wrapper.style.width = this.width;
    wrapper.style.height = this.height;
    wrapper.style.border = "1px solid black";
    wrapper.innerHTML = "CAROUSEL VERSION " + VERSION + " BEGINS (ﾉ´ヮ´)ﾉ*:･ﾟ✧";

    targetElement.appendChild(wrapper);
  }
}
