//reduce method

let arr = [1,2,3]

//requirement - give me the sum of all the values inside the array

let sum = 0

arr.forEach((ele) => {
    sum = sum + ele
})

//console.log(sum)

//The above function can be written in reduce method

let sumRes = arr.reduce((currValue, nextValue) => {
    console.log('curr', currValue)
    console.log('next', nextValue)
    return currValue + nextValue
}, 9)

console.log(sumRes)