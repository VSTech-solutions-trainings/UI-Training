//return type in function will specify what is the type of return value from the function
function printName(personName?: string): string | undefined {
  return personName;
}

printName("Mike");
printName();

//what happens if we don't return anything
//we can use void return type

function logName(name: string): void {
  console.log(name);
}

//never return type

function throwError() {
  throw new Error("error occured");
  console.log("Hello");
}
