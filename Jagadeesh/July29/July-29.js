// Ways to creating an object

// 1) Object Literals {}
// 2) new Object
// 3)Object.assign
// 4)Factory functions
// 5)Constructor functions

//Object Literals

const user = {
  name: "Tom",
  age: 24
}

console.log(user)

//new Object

const player = new Object()
player.name = "Mike"
player.age = 24

console.log(player)

//Object.assign

const details = Object.assign({})
details.name = "Max"
details.age = 23

console.log(details)

//factory functions

function person(name, age){
  return {
    name: name,
    age: age
  }
}

const person1 = person("Alex", 22)
console.log(person1)

