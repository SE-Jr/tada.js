class Component {
  constructor(config) {
    this.config = config
    this.slideIdx = config.currentPage;
    this.slideCnt = config.slideCnt;

  }

  loop() {
    if (this.slideIdx >= this.slideCnt) {
      this.slideIdx =  0;
    }

    if (this.slideIdx < 0) {
      this.slideIdx = this.slideCnt - 1;
    }
  }

  next() {
    this.slideIdx += 1;
    if (this.config.infinite) {
      this.loop()
    }
  }

  prev() {
    this.slideIdx -= 1;
    if (this.config.infinite) {
      this.loop()
    }
  }

  render() {}
  moveTo() {}
}

export default Component;