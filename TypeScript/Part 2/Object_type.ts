//what is an object type ?
// This will describe the structure of an object
//this will describe what kind of properties it should take

let personDetails: {
  personName: string;
  personAge: number;
};

personDetails = {
  personName: "Mike",
  personAge: 12,
};

//we can create an object type using type alias

type Details = {
  name: string;
  age: number;
  id: string | number;
};

let mikeDetails: Details = {
  name: "mike",
  age: 12,
  id: "ABCD",
};

// we can also define optional properties
// we can specify the optional property using '?'

type OptionalDetails = {
  name: string;
  age?: number;
  id: string | number;
};

let TomDetails: OptionalDetails = {
  name: "tom",
  id: "ABCD",
};

//we can also define readonly properties

let person: {
  readonly age: number;
};

person = {
  age: 12,
};

//person.age = 90 // this will throw an error -  we cannot re-assign the value for the property which has readonly
