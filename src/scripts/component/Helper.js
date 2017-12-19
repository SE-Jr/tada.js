export function next(page) {
  return page + 1;
}

export function prev(page) {
  return page - 1;
}

export function infinite(page, cnt) {
  if (page >= cnt) {
    return 0;
  }

  if (page < 0) {
    return cnt - 1;
  }

  return page;
}
