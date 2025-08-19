//map operator or map method

//what is the use of map method ?

const arr = [1,2,3]

console.log(arr.length)

//Requirement - to create another array with addition of 1 to all the elements.

let newArr = []; //[2,3,4]

arr.forEach((ele) => {
    newArr.push(ele + 1)
})

console.log('newArr', newArr)

//we can achieve the same logic using map method

let mapNewArr = arr.map(ele => ele + 1)

console.log('mapArr', mapNewArr)
