import SlideProjector from './scripts/projector';

/*
* initialize carousel library
* projector - container - slide
*/
(function () {
  // using class selector
  new SlideProjector({
    projectorSelector: '.slide-projector-class',
    slideSelector: '.item',
    indicator: true
  });

  // using id selector
  new SlideProjector({
    projectorSelector: '#slide-projector-id',
    slideSelector: '.item',
    navigator: true
  });
}());
