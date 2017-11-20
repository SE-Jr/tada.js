import SlideProjector from './scripts/carousel';

/*
* initialize carousel library
* projector - container - slide
*/
(function () {
  // using class selector
  new SlideProjector({
    selector: '.slide-projector-class',
  });

  // using id selector
  new SlideProjector({
    selector: '#slide-projector-id',
    width: '400px',
    height: '300px',
    isMobile: true,
  });

  // error - option required
  // new SlideProjector();

  // error - selector required
  // new SlideProjector({});
}());
