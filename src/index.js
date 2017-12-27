import SlideProjector from './scripts/projector';

/*
* initialize carousel library
* projector - container - slide
*/
(function () {
  // using class selector
  new SlideProjector({
    selector: '.slide-projector-class',
    indicator: true
  });

  // using id selector
  new SlideProjector({
    selector: '#slide-projector-id',
    navigator: true
  });
}());
