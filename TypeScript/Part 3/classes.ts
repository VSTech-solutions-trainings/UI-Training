//what are classes ?

//This will combine separate variables, functions which is of same usage into one functionality.

//Main idea of classes is to encapsulate the data or the behavior

class Person {
  protected name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this._age = age;
  }

  printName(): void {
    console.log(this.name);
  }

  set age(value: number) {
    if (value > 0) {
      this._age = value;
    } else {
      throw new Error("Age should be always greater than 0");
    }
  }

  get age() {
    return this._age;
  }
}

class Mike extends Person {
  constructor() {
    super("Mike", 22);
  }

  setName() {
    this.name = "Sr Mike";
  }
}

let mike = new Mike(); // this = {}
mike.age = 0;
console.log(mike.age);

//Access modifiers (public, private, protected)
//This will define the visibility of a property of a class
//By default all the properties/methods are publicly visible

//public properties will be accessed anywhere
//private properties will be accessed within that class only
//protected properties will be accessed within that class and a class which extends that class

//getters setters
//we can access private variables using setters and getters
//additionally we can write some logics to prevent wrong data.
