function loop(model) {
  if (model.currentPage >= model.slideCount) {
    model.currentPage = 0;
  }

  if (model.currentPage < 0) {
    model.currentPage = model.slideCount - 1;
  }
}

export function next(model) {
  model.prevPage = model.currentPage;
  model.currentPage = model.prevPage + 1;
}

export function canMove(model, config) {
  if (model.currentPage >= config.slideCount - 1) {
    model.currentPage = config.slideCount - 1;
    return false;
  }

  if (model.currentPage <= 0) {
    model.currentPage = 0;
    return false;
  }
  return true;
}

export function prev(model) {
  model.prevPage = model.currentPage;
  model.currentPage = model.prevPage - 1;
}
