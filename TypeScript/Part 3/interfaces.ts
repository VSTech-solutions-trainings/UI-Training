//what are interfaces ?

//This will define the shape of an object, or we can call it as a contract to create objects.

//syntax

interface Person {
  name: string;
  age: number;
}

let mike: Person = {
  name: "Mike",
  age: 22,
};

//we can also provide methods inside an interface

interface School {
  id: number;
  printStudentName(): void;
}

let abcSchool: School = {
  id: 9090,
  studentsCount: 12,
  printStudentName(): void {
    console.log("There are 50 students");
  },
};

//we can also extends one interface to another interface

interface CentralSchool extends School {
  role: string;
}

// let abcCentralSchool: CentralSchool = {
//     id: 123,
//     role: 'Admin',
//     printStudentName(): void {
//         console.log('This is a central school')
//     }
// }

//if we create an interface with the same name, both will be merged

interface School {
  studentsCount: number;
}

// we can also create a structure of an object using type

type schoolType = {
  id: number;
  printStudentName(): void;
};

//Difference between an interface and a type

//type is mostly used for definining primitive types, unions
//interfaces is mainly used for object structure

//we cannot create a same type with the same name but we can do it with interfaces.

//readonly, optional properties

interface Home {
  readonly address: string;
  phoneNumber?: string;
}

let TomHome: Home = {
  address: "123 Street",
}; // Since phone number is an optional property, we can omit it.

//TomHome.address = "456 Street"; // This will throw an error saying address cannot be re-assigned.
