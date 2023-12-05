// map() when we need to make a new array 

let array = [1,2,3,4,5]

let a = array.map((value) =>{
    console.log(value)
    return value + 1
})

console.log(a)