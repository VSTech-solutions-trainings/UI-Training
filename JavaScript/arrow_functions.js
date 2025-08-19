//function expression
var printName = function() {
    console.log('Mike')
}
printName()

//ES6
//Arrow function - to make functions simplier to write or read
var printName = () => {
    console.log('Mike')
}

//rules of arrow function

var addNum = function(a,b) {
    var res = a + b
    return res;
}

//above function can be written in arrow function as below

//example 1
var addNum = (a,b) => {
    var res = a + b
    return res;
}

//example 2

var printNum =  function(a) {
    console.log(a)
}

//above function can be written in arrow function as below

var printName = (a) => {
    console.log(a)
}

//OR

var printName = a => {
    console.log(a)
}

//OR

var printName = a => console.log(a)