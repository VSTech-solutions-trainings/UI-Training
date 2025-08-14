type funtionType = (a: string) => number;

function printName(name: string, callbackFn: funtionType) {
  console.log(name);
}

function logSuccess(personName: string) {
  console.log(personName);
  return 12;
}

printName("Mike", logSuccess);
