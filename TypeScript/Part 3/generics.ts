// what are generics ?

//issue
type id = {
  idValue: number;
};

type idType = {
  id: number | string | string[] | number[];
};

//generics are used to create resusable code that works with different types
// but still we can have the type checking or type safety

type IDTYPE<T> = {
  id: T;
};

let personId: IDTYPE<number> = {
  id: 12,
};

let personOldId: IDTYPE<string> = {
  id: "Admin",
};

let personNewId: IDTYPE<boolean> = {
  id: true,
};

function printValue<T>(value: T): T {
  return value;
}

console.log(printValue<number>(12));
console.log(printValue<string>("12"));
