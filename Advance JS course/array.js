arr = [1,2,4,5,5654,7,8]
console.log(arr[4])
console.log(arr)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
 
var a =0;
console.log(a)

while(a < 5)
{
    console.log(`This is while loop output ${arr[a]}`)
    a++
}


// do while loop

let d = 0; 
do {
    console.log(`This is do while loop output ${arr[d]}`);
    d++;
} while (d < 7);