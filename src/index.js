import SlideProjector from './scripts/Carousel';

/*
* initialize carousel library
* projector - container - slide
*/
(function () {
  // using class selector
 const slideProject = new SlideProjector({
    selector: '.slide-projector-class',
  });

 // slideProject.on("next", function(){
 //    console.log("next$$$$");
 // });
  // using id selector
  // new SlideProjector({
  //   selector: '#slide-projector-id',
  //   width: 600,
  //   height: 400,
  // });

  // error - option required
  // new SlideProjector();

  // error - selector required
  // new SlideProjector({});
}());
