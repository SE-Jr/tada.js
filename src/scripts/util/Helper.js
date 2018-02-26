// state, config 합쳐서 model 로 만들것인가?

function loop(state, config){
  if (state.currentPage >= config.slideCount) {
    state.currentPage =  0;
  }

  if (state.currentPage < 0) {
    state.currentPage = config.slideCount - 1;
  }
}

export function next(state, config) {
  state.prevPage = state.currentPage;
  state.currentPage = state.prevPage + 1;

  if(config && config.infinite) {
    loop(state, config);
  }
}

export function prev(state, config) {
  state.prevPage = state.currentPage;
  state.currentPage = state.prevPage - 1;

  if(config && config.infinite) {
    loop(state, config);
  }
}