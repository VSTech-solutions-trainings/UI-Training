class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    if (name.length > 0) {
      this._name = name;
    } else {
      throw new Error("Name should be more");
    }
  }
}

let mike = new Person("Mike");
mike.name = "";
