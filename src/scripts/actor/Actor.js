export default class Actor {
  constructor(config, observer) {
    this.config = config;
    this.slideCnt = config.slideCnt;
    this.observer = observer;
    this.currentSlideId = config.currentPage;
  }

  next() {
    this.currentSlideId = this.currentSlideId + 1;
    if (this.currentSlideId >= this.slideCnt) {
      this.currentSlideId = 0;
    }
  }

  prev() {
    this.currentSlideId = this.currentSlideId - 1;
    if (this.currentSlideId < 0) {
      this.currentSlideId = this.slideCnt - 1;
    }
  }

  moveTo() {}
}