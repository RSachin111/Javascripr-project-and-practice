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
// after apply map function when we have string items 

console.log(newarr2)


arr3=[1,2,3,4,5,6,7]
// After apply map function when we have number items 
newarr3 = arr3.map(function(number){
    return number % 2 
})

console.log(`This is output for map method and for arr3 ${newarr3}`)


arr4 = [1,2,3,4,5,6,7]
newarr4 = arr4.filter(function(number){
    return number % 2;
})
console.log(`This is by fiter method and for aarr4 ${newarr4}`)