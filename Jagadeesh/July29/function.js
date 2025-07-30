// function addNum(a,c, b =4){
//   console.log("a", a)
//   console.log("b",b)
//   console.log("c", c)

//   return res = a+b+c
// }

// const result = addNum(1,3,)

// console.log(result)

let name1
function greet(callback){
  callback()
  console.log(name1)
}

function assignName(){
  name1 = "Mike"
}

greet(assignName)
