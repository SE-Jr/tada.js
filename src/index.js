import SlideProjector from './scripts/carousel';

/*
* initialize carousel library
* projector - container - slide
*/
(function () {
  // using class selector
  new SlideProjector({
    projectorSelector: '.demo-slide-projector-class'
  });

  new SlideProjector({
    projectorSelector: '#demo-slide-projector-id'
  });

  // error - option required
  // new SlideProjector();

  // error - selector required
  // new SlideProjector({});
}());
