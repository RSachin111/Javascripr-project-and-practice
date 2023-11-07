let a = "sachin"   // block scope 
const b = "sachin"  // block scope 
var  c = "sachin"  // global scope
const d = true
let list =["sachin",10,"rathore"]
let dictonary = {
    cityName:"Indore",
    pincode: 452001
}

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(list)
console.log(dictonary)

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(list))
console.log(typeof(dictonary))
// console.log(typeof(a))
// console.log(e)

function Name(){
    var name = "sachin"
    var surname = "Rathore"
    console.log(name)
    console.log(surname)
// var newname = "adarsh0";

    if  (true){
        var  name ="rathore"
        var  surname ="sachin"
        console.log(name)
        console.log(surname)
       
        console.log(name)
        console.log(surname)
    }
}


// // Name()
function SName(){
    const name = "sachin"
    let surname = "Rathore"
    console.log(name)
    console.log(surname)
var newname = "adarsh0";

    if  (true){

        console.log(name)
        console.log(surname)
        
        const  name ="rathore"
        let  surname ="sachin"
       
        console.log(name)
        console.log(surname)
        if (true){

            console.log(name)
            console.log(surname)

            // const  name ="sachin"
            // let  surname ="rathore"
           
            // console.log(name)
            // console.log(surname)
        }
    }
}


SName()


if (true) {  //this is main block
    const e = "Rathore";
    let f = "singh";
    console.log(e);
    console.log(f);

    if (true) {  // nested block
    console.log(e)
    console.log(f)
    }
}
