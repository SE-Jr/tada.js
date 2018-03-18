class State {
  constructor() {
    this._id = 'id';
    this._currentPage = 0;
  }

  set id(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  set currentPage(page) {
    this._currentPage = page;
  }

  get currentPage() {
    return this._currentPage;
  }
}

export default State;
