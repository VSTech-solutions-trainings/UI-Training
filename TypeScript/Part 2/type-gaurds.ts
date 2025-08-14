function print(details: string | number) {
  if (typeof details === "string") {
    console.log(details.length);
  } else {
    console.log(details.toFixed(2));
  }
}

print("Mike");
print(90);

//if a variable accepts a union type, we can check the type of the parameter and execute the code without any errors

type personAgeDetails = {
  age: number;
};
type personNameDetails = {
  name: string;
};

function printPersonDetails(details: personAgeDetails | personNameDetails) {
  if ("name" in details) {
    console.log(details.name);
  } else {
    console.log(details.age);
  }
}

printPersonDetails({
  age: 12,
});

//2 types of type gaurds - typeof (primitive), in (objects)
