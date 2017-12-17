export default class Actor {
  constructor(config, observer) {
    this.config = config;
    this.slideCnt = config.slideCnt;
    this.observer = observer;
    this.currentSlideId = config.currentPage;
  }
  //TODO REFACTOR
  moveTo(page) {
    if (page >= this.slideCnt) {
      this.currentSlideId = 0;
    }
    if (page < 0) {
      this.currentSlideId = this.slideCnt - 1;
    }
  }
  next() {
    this.currentSlideId = this.currentSlideId + 1;
  }

  prev() {
    this.currentSlideId = this.currentSlideId - 1;
  }
}