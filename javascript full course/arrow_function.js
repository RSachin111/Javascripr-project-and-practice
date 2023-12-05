//arrow function one line expression
let sum =(a,b)=> console.log(a + b)
sum(4,5)


// arrow function also can write 
const name2 = (name)=>{
    console.log(`The admin name is ${name}`)
}

name2("Sachin singh rathore ")

// conditional using arrow function

const Subject = (subject) => {
    if (subject === "science") {
        console.log("This is not the correct subject");
    } else if (subject === "maths") {
        console.log("This is the correct subject");
    } else {
        console.log("Please enter correct subject name");
    }
}

Subject("maths");


// object in arrow function 

const obj = ()=>{
    studentList[
        rollno:101,
        sname:"maths"
    ]
}
