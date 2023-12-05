arr=[1,2,3,4,5,6,7]
// After apply map function when we have number items 
newarr = arr.map(function(number){
    return number*2
})

console.log(newarr)






var arr2 = ["Sachin", "rathore", "name"];
console.log(arr2);
newarr2=arr2.map(function(str){
    return str.toUpperCase();
})
// after apply map function when we have string items  // return an array

//  map(value.index,array)

let arrmap = ["Sachin", "Singh", "Rathore"];

arrmap = arrmap.map((value, index, array) => {
    return { value.toUpperCase(), index, array };
});

console.log(`This is arr`, arrmap);



console.log(newarr2)


arr3=[1,2,3,4,5,6,7]
// After apply map function when we have number items 
// it will make new array acording to the condition
newarr3 = arr3.map(function(number){
    return number / 2 
})

console.log(`This is output for map method and for arr3 ${newarr3}`);


//filter method when we want to display those items which is not divided by 2   //return an array
// it will return all the items those satisfy the condition 

var arr4 = [1, 2, 3, 4, 5, 6, 7];

// Using filter to create a new array with elements divisible by 2
var newarr4 = arr4.filter(function (number) {
  return number % 2 == 0; // Check if the number is divisible by 2
});

console.log(`This is by filter method and for arr4 ${newarr4}`);
