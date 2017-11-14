import Carousel from "./scripts/Carousel";

( _ => {
    new Carousel({
        selector: '#carousel-container'
    }).load();


    new Carousel({
        selector: '#another-container',
        width: 400,
        height: 300
    }).load();

})();
