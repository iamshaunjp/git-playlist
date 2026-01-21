class Thanks {
  _thank;

  constructor(t) {
    this._thank = this._thanksNinja("NetNinja, to let us to fork this repo");
    console.log(this._thank);
  }

  _thanksNinja(t) {
    return `Thanks ${t}`;
  }
}

const thankU = new Thanks();
