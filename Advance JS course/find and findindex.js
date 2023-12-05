// find method will return a value which satisfy the condition 

arr = [1,2,3,4,5,6]

arr = arr.find(function(value){
    return value >4;
})


console.log(arr)


// findIndex method will return a index value of that value  which satisfy the condition 

arr2 = [1,2,3,4,5,6]

arr2 = arr2.findIndex(function(value){
    return value >4;
})

console.log(arr2)

