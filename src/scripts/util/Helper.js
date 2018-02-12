function loop(model){
  if (model.currentPage >= model.slideCount) {
    model.currentPage =  0;
  }

  if (model.currentPage < 0) {
    model.currentPage = model.slideCount - 1;
  }
}

export function next(model) {
  model.prevPage = model.currentPage;
  model.currentPage = model.prevPage + 1;

  if(model.infinite) {
    loop(model)
  }

}

export function prev(model) {
  model.prevPage = model.currentPage;
  model.currentPage = model.prevPage - 1;

  if(model.infinite) {
    loop(model)
  }
}